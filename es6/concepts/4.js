// 普通情况
const func = function(a,b){
    // arguments
    console.log(arguments);
    console.log(arguments[2]); // 3
    console.log(a,b); 
}
func(1,2,3);//  1 2

// 箭头函数 下的arguments
const funca = (a, b) => { 
    // this 
    // arguments 
    console.log(arguments, arguments[2]); // 乱七八糟
    console.log(a, b);
} 
funca(1, 2, 3);