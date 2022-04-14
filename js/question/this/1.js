function func(num) {
    // this 指向谁 ，  this.count++ 就是谁的
    // 1. new绑定：this->实例    大写为构造函数
    // 2. window || global || use strict
    // 3. call || apply || bind
    this.count++;
}
// func 一等对象  count属性属于func自己的   
func.count = 0;     // 类的静态属性，不是实例

// 普通函数调用
func(0);

console.log(func.count);  // 与func的count一点关系都没有