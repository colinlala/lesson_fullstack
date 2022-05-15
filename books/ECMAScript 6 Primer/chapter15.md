# Proxy

## 1. 概述

-  Proxy 可以理解成，***在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写***。

- ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例。

    ```js
    var proxy = new Proxy(target, handler);
    ```
    - `target`参数表示所要拦截的目标对象，`handler`参数也是一个对象，用来定制拦截行为。
        > 必须针对**Proxy实例**进行操作，而不是针对目标对象（上例是空对象）进行操作。

- `handler`没有设置任何拦截，那就等同于直接通向原对象。

- Proxy 实例也可以作为其他对象的原型对象。

## 2. 实例方法

1. `get(target, propKey, receiver)`：**拦截对象属性的读取**，*参数*：目标对象、属性名、 proxy 实例本身，原始的读操作所在的那个对象（可选）。属性不可配置不可写，那么`get`方法将不起作用。

    ```js
    var person = {
    name: "张三"
    };
    var proxy = new Proxy(person, {
        get: function(target, propKey) {
            if (propKey in target) {
                return target[propKey];
            } else {
                throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.");
            }
        }
    });
    console.log(proxy.name) // "张三"
    console.log(proxy.age) // 抛出一个错误
    ```
    - 第三个参数的例子:

        ```js
        const proxy = new Proxy({}, {
            get: function(target, key, receiver) {
                return receiver;
            }
        });
        console.log(proxy.getReceiver === proxy) // true
        // proxy对象的getReceiver属性是由proxy对象提供的，所以receiver指向proxy对象。

        const d = Object.create(proxy);
        console.log(d.a === d) // true
        // d对象本身没有a属性，所以读取d.a的时候，会去d的原型proxy对象找。这时，receiver就指向d，代表原始的读操作所在的那个对象。
        ```


2. `set(target, propKey, value, receiver)`：**拦截对象属性的设置**，*参数*：目标对象、属性名、属性值、 Proxy 实例本身（可选），返回*布尔值*。属性不可写，那么`set`方法将不起作用。

    ```js
    let validator = {
        set: function(obj, prop, value) {
            if (prop === 'age') {
                if (!Number.isInteger(value)) {
                    throw new TypeError('The age is not an integer');
                }
                if (value > 200) {
                    throw new RangeError('The age seems invalid');
                }
            }
            obj[prop] = value;
            return true;
        }
    };
    let person = new Proxy({}, validator);
    person.age = 100;
    person.age = 'young' // 报错
    person.age = 300 // 报错
    ```
    - 用途：可以防止内部属性泄露，被外部读写。

        ```js
        const handler = {
            get (target, key) {
                invariant(key, 'get');
                return target[key];
            },
            set (target, key, value) {
                invariant(key, 'set');
                target[key] = value;
                return true;
            }
        };
        function invariant (key, action) {
            // 只要读写的属性名的第一个字符是下划线，一律抛错，从而达到禁止读写内部属性的目的。
            if (key[0] === '_') {
                throw new Error(`Invalid attempt to ${action} private "${key}" property`);
            }
        }
        const target = {};
        const proxy = new Proxy(target, handler);
        proxy._prop // Error: Invalid attempt to get private "_prop" property
        proxy._prop = 'c'// Error: Invalid attempt to set private "_prop" property
        ```
    
    - 第四个参数的例子:

        ```js
        const handler = {
            set: function(obj, prop, value, receiver) {
                obj[prop] = receiver;
                return true;
            }
        };
        const proxy = new Proxy({}, handler);
        const myObj = {};
        Object.setPrototypeOf(myObj, proxy);
        myObj.foo = 'bar';
        myObj.foo === myObj // true
        ```
    
    - 严格模式下，`set`代理不返回布尔值（只返回true），就会报错（false | undefined）。





3. `apply(target, object, args)`：**拦截函数的调用、`call`、`apply`**，*参数*：目标对象、目标对象的上下文对象（this）、目标对象的参数数组。

    ```js
    var target = function () { return 'I am the target'; };
    var handler = {
        apply: function () {
            return 'I am the proxy';
        }
    };
    var p = new Proxy(target, handler);
    console.log(p())// "I am the proxy"
    // 变量p是 Proxy 的实例，当它作为函数调用时（p()），就会被apply方法拦截，返回一个字符串。
    ```

    - 以下代码，每当执行`proxy`函数（直接调用或`call`和`apply`调用），就会被`apply`方法拦截。

        ```js
        var twice = {
            apply (target, ctx, args) {
                return Reflect.apply(...arguments) * 2;
            }
        };
        function sum (left, right) {
            return left + right;
        };
        var proxy = new Proxy(sum, twice);
        proxy(1, 2) // 6
        proxy.call(null, 5, 6) // 22
        proxy.apply(null, [7, 8]) // 30
        ```

    - 直接调用`Reflect.apply`方法，也会被拦截。
        ```js
        Reflect.apply(proxy, null, [9, 10]) // 38
        ```

4. `has(target, propKey)`：**拦截`HasProperty`(propKey in proxy)的操作**，*参数*：目标对象、需查询的属性名，返回**布尔值**。原对象不可配置或者禁止扩展，这时`has()`拦截会报错。

    - 使用`has()`方法隐藏某些属性，不被in运算符发现。

        ```js
        var handler = {
            has (target, key) {
                if (key[0] === '_') {
                    return false;
                }
                return key in target;
            }
        };
        var target = { _prop: 'foo', prop: 'foo' };
        var proxy = new Proxy(target, handler);
        console.log('_prop' in proxy);// false
        ```

    > 注意：
    > > - `has()`方法拦截的是`HasProperty`操作，而不是`HasOwnProperty`操作，即`has()`方法不判断一个属性是对象自身的属性，还是继承的属性。
    > > - `has()`拦截对`for...in`循环不生效。


5. `construct(target, args, newTarget)`：**拦截`new`命令**，*参数*：目标对象、构造函数的参数数组、创造实例对象时new命令作用的构造函数。

    ```js
    const p = new Proxy(function () {}, {
        construct: function(target, args) {
            console.log('called: ' + args.join(', '));
            return { value: args[0] * 10 };
        }
    });
    console.log((new p(1)).value)
    // "called: 1"
    // 10
    ```

    > 注意：
    > > - 必须返回对象。
    > > - 拦截的目标对象必须是函数。
    > > - `this`指向的是`handler`，而不是实例对象。
    

6. `deleteProperty(target, propKey)`：**拦截`delete`操作**，抛出错误或者返回`false`，当前属性就无法被`delete`命令删除。返回**布尔值**。目标对象自身的属性不可配置，不能被`deleteProperty`方法删除。

7. `defineProperty(target, propKey, propDesc)`：**拦截`Object.defineProperty()`操作**，*参数*：目标对象、要定义或修改的属性名或Symbol、要定义或修改的属性描述。返回**布尔值**。目标对象自身的属性不可配置，`defineProperty()`不能增加目标对象上不存在的属性，属性不可写也不能改变。

    ```js
    var handler = {
        defineProperty (target, key, descriptor) {
            return false;
        }
    };
    var target = {};
    var proxy = new Proxy(target, handler);
    proxy.foo = 'bar' // 不会生效
    // defineProperty()方法内部没有任何操作，只返回false，导致添加新属性总是无效。这里的false只是用来提示操作失败，本身并不能阻止添加新属性。
    ```


8. `getOwnPropertyDescriptor(target, propKey)`：**拦截`Object.getOwnPropertyDescriptor()`**，返回**属性的描述对象或`undefined`**。


9. `getPrototypeOf(target)`：**拦截获取对象原型**，返回一个**对象或null**。目标对象不可扩展， 则必须返回目标对象的原型对象。

    - 拦截
        1. `Object.prototype.__proto__`
        2. `Object.prototype.isPrototypeOf()`
        3. `Object.getPrototypeOf()`
        4. `Reflect.getPrototypeOf()`
        5. `instanceof`

    ```js
    var proto = {};
    var p = new Proxy({}, {
        getPrototypeOf(target) {
            return proto;
        }
    });
    console.log(Object.getPrototypeOf(p) === proto )// true
    ```

10. `isExtensible(target)`：**拦截`Object.isExtensible()`**，返回一个**布尔值**，否则返回值被自动转为布尔值。

    ```js
    var p = new Proxy({}, {
        isExtensible: function(target) {
            console.log("called");
            return true;
        }
    });
    console.log(Object.isExtensible(p))
    // "called"
    // true
    ```
    - 它的返回值必须与目标对象的`isExtensible`属性保持一致，否则就会抛出错误。


11. `ownKeys(target)`：**拦截对象自身属性的读取操作**，返回一个**数组(成员只能是字符串或 Symbol 值)**。目标对象属性自身不可配置，则该属性必须被`ownKeys()`方法返回。目标对象是不可扩展的，`ownKeys()`方法返回的数组必须包含原对象的所有属性，且不能包含多余的属性。

    - 拦截
        1. `Object.getOwnPropertyNames()`
        2. `Object.getOwnPropertySymbols()`
        3. `Object.keys()`
        4. `for...in`循环

    - 该方法返回目标对象所有自身的属性的属性名，而`Object.keys()`的返回结果仅包括目标对象自身的可遍历属性(*不存在的属性*、*属性名为 Symbol 值*、*不可遍历的属性*都不会返回，会被`ownKeys()`方法自动过滤)。

        ```js
        let target = {
            a: 1,
            b: 2,
            c: 3,
            [Symbol.for('secret')]: '4',
        };
        Object.defineProperty(target, 'key', {
            enumerable: false,
            configurable: true,
            writable: true,
            value: 'static'
        });
        let handler = {
            ownKeys(target) {
                return ['a', 'd', Symbol.for('secret'), 'key'];
            }
        };
        let proxy = new Proxy(target, handler);
        console.log(Object.keys(proxy)) // ['a']
        
        ```

12. `preventExtensions(target)`：**拦截`Object.preventExtensions()`**，返回一个**布尔值**。目标对象不可扩展时，才能返回`true`。

    - 防止出现不知道对象是否可扩展问题，通常要在`proxy.preventExtensions()`方法里面，调用一次`Object.preventExtensions()`。

        ```js
        var proxy = new Proxy({}, {
            preventExtensions: function(target) {
                console.log('called');
                Object.preventExtensions(target);
                return true;
            }
        });
        console.log(Object.preventExtensions(proxy))
        // "called"
        // Proxy {}
        ```

13. `setPrototypeOf(target, proto)`：**拦截`Object.setPrototypeOf()`**，返回一个**布尔值**。目标对象不可扩展，则不得改变目标对象的原型。



## 3. Proxy.revocable()

- `Proxy.revocable()`方法返回一个可取消的 Proxy 实例。返回一个对象。

    ```js
    let target = {};
    let handler = {};
    let {proxy, revoke} = Proxy.revocable(target, handler);
    // 返回的对象的proxy属性是Proxy实例，revoke属性是一个函数，可以取消Proxy实例。
    proxy.foo = 123;
    proxy.foo // 123
    revoke();
    proxy.foo // TypeError: Revoked
    ```

- `Proxy.revocable()`的一个使用场景是，目标对象不允许直接访问，必须通过代理访问，一旦访问结束，就收回代理权，不允许再次访问。

## 4. this问题

- 虽然 Proxy 可以代理针对目标对象的访问，但它不是目标对象的透明代理，即不做任何拦截的情况下，也无法保证与目标对象的行为一致。主要原因就是在 Proxy 代理的情况下，**目标对象内部的`this`关键字会指向 Proxy 代理**。

    ```js
    const target = {
        m: function () {
            console.log(this === proxy);
        }
    };
    const handler = {};
    const proxy = new Proxy(target, handler);
    // proxy没有做任何拦截，proxy代理target
    target.m() // false   target.m()内部的this指向proxy，所以false
    proxy.m()  // true
    // 
    ```

- 有些原生对象的内部属性，只有通过正确的`this`才能拿到。例如：`getDate()`方法只能在`Date`对象实例上面拿到，`this`绑定原始对象，就可以。

    ```js
    const target = new Date();
    const handler = {};
    const proxy = new Proxy(target, handler);
    console.log(proxy.getDate());// 报错 TypeError: this is not a Date object.
    
    const target = new Date('2015-01-01');
    const handler = {
        get(target, prop) {
            if (prop === 'getDate') {
            return target.getDate.bind(target);
            }
            return Reflect.get(target, prop);
        }
    };
    const proxy = new Proxy(target, handler);
    console.log(proxy.getDate()) // 1
    ```

- Proxy 拦截函数内部的`this`，指向的是`handler`对象。

