// 例一
// function f(x , y=1) {
//     return [x, y];
// }

// console.log(f(2));

// 二
// var x = 1;
// function foo(x, y = function() { x = 2;}) {
//   var x = 3;
//   y();
//   console.log(x);
// }

// foo() // 3
// x // 1
// 函数foo的参数形成一个单独作用域。这个作用域里面，首先声明了变量x，然后声明了变量y，y的默认值是一个匿名函数。
//这个匿名函数内部的变量x，指向同一个作用域的第一个参数x。
//函数foo内部又声明了一个内部变量x，该变量与第一个参数x由于不是同一个作用域，所以不是同一个变量，因此执行y后，内部变量x和外部全局变量x的值都没变。

//如果将var x = 3的var去除，函数foo的内部变量x就指向第一个参数x，与匿名函数内部的x是一致的，所以最后输出的就是2，而外层的全局变量x依然不受影响。



// 三
function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}
var id = 21;
foo.call({ id: 42 });// id: 42

