# Set 和 Map 数据结构

## 1. Set

- `Set`本身是一个构造函数，用来生成`Set`数据结构。类似于数组，但是成员的值都是**唯一的**，没有重复的值。

    ```js
    const s = new Set();
    [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
    for (let i of s) {
        console.log(i);
    }
    // 2 3 5 4
    ```

- `Set`函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。
    ```js
    // 例一
    const set = new Set([1, 2, 3, 4, 4]);
    [...set]
    // [1, 2, 3, 4]

    // 例二
    const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
    items.size // 5

    // 例三
    const set = new Set(document.querySelectorAll('div'));
    set.size // 56

    // 类似于
    const set = new Set();
    document
    .querySelectorAll('div')
    .forEach(div => set.add(div));
    set.size // 56
    ```

- 数组去重，字符串去重

    ```js
    // 去除数组的重复成员
    [...new Set(array)]

    [...new Set('ababbc')].join('')// "abc"
    ```


> 向 Set 加入值的时候，不会发生类型转换，所以5和"5"是两个不同的值。**Set认为NaN等于NaN**。

1. 操作方法
    
    - `Set.prototype.add(value)`：添加某个值，返回 Set 结构本身。
    - `Set.prototype.delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
    - `Set.prototype.has(value)`：返回一个布尔值，表示该值是否为Set的成员。
    - `Set.prototype.clear()`：清除所有成员，没有返回值。


    > Array.from方法可以将 Set 结构转为数组。
    ```js
    const items = new Set([1, 2, 3, 4, 5]);
    const array = Array.from(items);    
    ```

2. 遍历操作

    - `Set.prototype.keys()`：返回**键名**的遍历器
    - `Set.prototype.values()`：返回**键值**的遍历器（默认）
    - `Set.prototype.entries()`：返回**键值对**的遍历器
    - `Set.prototype.forEach()`：使用回调函数遍历每个成员


    - `Set`结构没有键名，只有键值（或者说键名和键值是同一个值），所以**keys方法和values方法的行为完全一致**。


    - `Set` 结构的默认遍历器生成函数就是`values`方法。可以省略values方法，直接用for...of循环遍历 Set。

        ```js
        let set = new Set(['red', 'green', 'blue']);
        for (let x of set) {
        console.log(x);
        }
        // red
        // green
        // blue
        ```

    - `forEach`方法，用于对每个成员执行某种操作，没有返回值。*还可以有第二个参数，表示绑定处理函数内部的this对象*。


    - 使用 `Set` 可以很容易地实现并集、交集和差集。

        ```js
        let a = new Set([1, 2, 3]);
        let b = new Set([4, 3, 2]);
        // 并集
        let union = new Set([...a, ...b]);// Set {1, 2, 3, 4}
        // 交集
        let intersect = new Set([...a].filter(x => b.has(x)));// set {2, 3}
        // （a 相对于 b 的）差集
        let difference = new Set([...a].filter(x => !b.has(x)));// Set {1}
        ```


    - 遍历中，同步改变原来的`Set`结构。

        ```js
        // 方法一  利用原 Set 结构映射出一个新的结构，然后赋值给原来的 Set 结构
        let set = new Set([1, 2, 3]);
        set = new Set([...set].map(val => val * 2));
        // set的值是2, 4, 6

        // 方法二  利用Array.from方法
        let set = new Set([1, 2, 3]);
        set = new Set(Array.from(set, val => val * 2));
        // set的值是2, 4, 6
        ```

## 2. WeakSet

- `WeakSet` 结构与 `Se`t 类似，也是不重复的值的集合。
    1. `WeakSet` 的成员只能是**对象**，而不能是其他类型的值。
    2. `WeakSet` 中的**对象都是弱引用**，即垃圾回收机制不考虑 `WeakSet` 对该对象的引用（**如果其他对象都不再引用该对象，那么会自动回收该对象所占用的内存**）。


> WeakSet 的成员是不适合引用的，适合临时存放一组对象，以及存放跟对象绑定的信息。


- `WeakSet` 可以接受一个**数组或类似数组的对象**作为参数（任何具有 Iterable 接口的对象）。

    ```js
    const a = [[1, 2], [3, 4]];  
    const ws = new WeakSet(a);// WeakSet {[1, 2], [3, 4]}
    
    const b = [3, 4];
    const ws = new WeakSet(b);// Uncaught TypeError: Invalid value used in weak set(…)
    ```
    - 上面代码中，`a`数组的成员成为 `WeakSet` 的成员，而不是`a`数组本身。数组`b`的成员不是对象，加入 `WeakSet` 就会报错。



- `WeakSet.prototype.add(value)`：向 `WeakSet`实例添加一个新成员。
- `WeakSet.prototype.delete(value)`：清除 `WeakSet` 实例的指定成员。
- `WeakSet.prototype.has(value)`：返回一个布尔值，表示某个值是否在 `WeakSet` 实例之中。



- `WeakSet`没有`size`和`forEach`属性，无法遍历它的成员（弱引用，随时可能消失）。

> WeakSet 的一个用处，是**储存 DOM 节点**，而不用担心这些节点从文档移除时，会引发内存泄漏。



## 3. Map

- JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。**“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键**。

    ```js
    const m = new Map();
    const o = {p: 'Hello World'};
    m.set(o, 'content')
    m.get(o) // "content"

    const map = new Map([
        ['name', '张三'],
        ['title', 'Author']
    ]);
    map.size // 2
    map.has('name') // true
    map.get('name') // "张三"
    map.get('title') // "Author"
    ```

- `Set`和`Map`都可以用来生成新的 `Map`。

- 对同一个键多次赋值，后面的值将覆盖前面的值。

- 对同一个对象的引用，`Map` 结构才将其视为同一个键。同样的值的两个实例，在 `Map` 结构中被视为两个键。

    ```js
    const map = new Map();
    map.set(['a'], 555);
    map.get(['a']) // undefined

    const k1 = ['a'];
    const k2 = ['a'];
    map.set(k1, 111).set(k2, 222);
    map.get(k1) // 111
    map.get(k2) // 222
    ```

- `Map` 的键是一个**简单类型**的值（数字、字符串、布尔值），则只要两个值**严格相等**，Map 将其视为一个键。

> 虽然NaN不严格相等于自身，但 Map 将其视为同一个键。


1. 属性

    - `size`属性返回 `Map` 结构的成员总数。

2. 操作方法

    - `Map.prototype.set(key, value)`:设置键名`key`对应的键值为`value`，然后返回整个 `Map` 结构。如果`key`已经有值，则键值会被更新，否则就新生成该键。
    - `Map.prototype.get(key)`:读取`key`对应的键值，如果找不到`key`，返回`undefined`。
    - `Map.prototype.has(key)`:返回一个布尔值，表示某个键是否在当前 `Map` 对象之中。
    - `Map.prototype.delete(key)`:删除某个键，返回`true`。如果删除失败，返回`false`。
    - `Map.prototype.clear()`:清除所有成员，没有返回值。

3. 遍历方法

    - `Map.prototype.keys()`：返回**键名**的遍历器。
    - `Map.prototype.values()`：返回**键值**的遍历器。
    - `Map.prototype.entries()`：返回所有成员的遍历器。(默认)
    - `Map.prototype.forEach()`：遍历 Map 的所有成员。


    `Map`结构转为数组结构，扩展运算符（`...`）。
    `Map` 的`forEach`方法，可以接受第二个参数，用来绑定`this`。

4. 数据结构转换

    1. Map 转为数组
        - 扩展运算符（...）。

    2. 数组 转为 Map
        - 数组传入 Map 构造函数，就可以转为 Map。

    3. Map 转为对象
        - 如果所有 Map 的键都是字符串，它可以无损地转为对象。
            
            ```js
            function strMapToObj(strMap) {
                let obj = Object.create(null);
                for (let [k,v] of strMap) {
                    obj[k] = v;
                }
                return obj;
            }
            const myMap = new Map().set('yes', true).set('no', false);
            strMapToObj(myMap) // { yes: true, no: false }
            ```

    4. 对象转为 Map
        - 可以通过`Object.entries()`。

            ```js
            let obj = {"a":1, "b":2};
            let map = new Map(Object.entries(obj));
            ```
        
        - 自定义一个

            ```js
            function objToStrMap(obj) {
                let strMap = new Map();
                for (let k of Object.keys(obj)) {
                    strMap.set(k, obj[k]);
                }
                return strMap;
            }
            objToStrMap({yes: true, no: false})// Map {"yes" => true, "no" => false}
            ```
    
    5. Map 转为 JSON
        1. 键名都是*字符串*，转为对象 JSON。

            ```js
            function strMapToJson(strMap) {
                return JSON.stringify(strMapToObj(strMap));
            }
            let myMap = new Map().set('yes', true).set('no', false);
            strMapToJson(myMap)  // '{"yes":true,"no":false}'
            ```

        2. 键名有*非字符串*，转为数组 JSON。

            ```js
            function mapToArrayJson(map) {
                return JSON.stringify([...map]);
            }
            let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
            mapToArrayJson(myMap)  // '[[true,7],[{"foo":3},["abc"]]]'
            ```
            
    6. JSON 转为 Map
        1. 所有键名都是字符串。

            ```js
            function jsonToStrMap(jsonStr) {
                return objToStrMap(JSON.parse(jsonStr));
            }
            jsonToStrMap('{"yes": true, "no": false}')// Map {'yes' => true, 'no' => false}
            ```

        2. 整个 JSON 就是一个数组，且每个数组成员本身，又是一个有两个成员的数组。

            ```js
            function jsonToMap(jsonStr) {
                return new Map(JSON.parse(jsonStr));
            }
            jsonToMap('[[true,7],[{"foo":3},["abc"]]]')// Map {true => 7, Object {foo: 3} => ['abc']}
            ```


## 4. WeakMap

- `WeakMap`结构与`Map`结构类似，也是用于生成键值对的集合。
    1. `WeakMap`只接受**对象**作为键名（null除外）。
    2. `WeakMap`的键名所指向的对象，不计入垃圾回收机制（**键名**所引用的对象都是**弱引用**，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用）。


> WeakMap结构有助于防止内存泄漏。WeakMap的键所对应的对象，可能会在将来消失。


- 没有`keys()`、`values()`和`entries()`，也没有`size`属性。
- 只有`get()`、`set()`、`has()`、`delete()`。


> WeakMap 应用的典型场合就是 DOM 节点作为键名。另一个用处是部署私有属性。


## 5. WeakRef

- 用于直接创建对象的弱引用。

    ```js
    let target = {};
    let wr = new WeakRef(target);
    // wr就是一个 WeakRef 的实例，属于对target的弱引用，垃圾回收机制不会计入这个引用，也就是说，wr的引用不会妨碍原始对象target被垃圾回收机制清除。
    ```
- `WeakRef` 实例对象有一个`deref()`方法，如果原始对象存在，该方法返回原始对象；如果原始对象已经被垃圾回收机制清除，该方法返回`undefined`。


> 标准规定，一旦使用WeakRef()创建了原始对象的弱引用，那么在本轮事件循环（event loop），原始对象肯定不会被清除，只会在后面的事件循环才会被清除。


## 6. FinalizationRegistry

- 清理器注册表功能 FinalizationRegistry，用来指定目标对象被垃圾回收机制清除以后，所要执行的回调函数。

            