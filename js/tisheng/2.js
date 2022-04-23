// 执行栈  js 语言得以运行起来
// 逐行运行
// 执行栈  顶部   当前在运行的代码


// 全局栈  f1 f2 在栈底    
f2();    // 出栈   a要销毁 内存的回收
f1();   // 出栈   b要销毁 内存的回收
console.log('aaaaa');  // 运行完后进入 idle状态
// Cannot access 'f2' before initialization


function f1 (){
    var b = 2;
    console.log('f1')
}

function f2 () {
    var a = 1;
    console.log('f2')
}
