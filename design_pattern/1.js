// 创建单例  Singleton
// 立即执行函数是创建闭包的手段之一
let CreateSingleton = (function () {
    // console.log('创建单例');
    // 多了一层作用域  作用域链
    let instance;  // 实例
    return function (name) {   // constructor
        if (instance) {    // 之前实例化过
            return instance
        }
        this.name = name;
        return instance = this;
    }
})();
// 惰性
CreateSingleton.prototype.getName = function () {
    console.log(this.name);
}

let singleton = new CreateSingleton('zyh')
let dalao = new CreateSingleton('大佬')  // 没有运行的机会

// console.log(singleton.name)
console.log(singleton == dalao) //true
console.log(singleton === dalao) //true

console.log(singleton.name)  //zyh
console.log(dalao.name)   //zyh

console.log(singleton.getName())  // zyh
console.log(dalao.getName())  // zyh



