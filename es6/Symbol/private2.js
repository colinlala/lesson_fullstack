// var sy = sb = Symbol('a');

// console.log(Symbol('1') == Symbol('1')) // false
// console.log(sy == sb)   // true 


var PClass = (function () {
    // 私有
    const a = Symbol('a');  // 唯一
    const m = Symbol('m');  // 唯一
    function P() {
        // 这样a就私有了 特定的值
        this[a] = '这是私有变量';
        // this.a = '这是私有变量';   // 拿得到 a
        this.b = '变量B 公有属性';
        // 私有方法
        this[m] = function () {
            console.log('-------------------')
        }
    }
    // 通过原型链可以拿到a 和m
    P.prototype = {
        getA() {
            console.log(this[a])
            this[m]();
        }
    }
    return P;
})();


//  访问不到 a m  

const pc = new PClass();
console.log(pc.b);
// console.log(pc.a);   // 拿不到
// console.log(pc.m);

pc.getA()
// console.log(pc.m);


