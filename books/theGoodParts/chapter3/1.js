//let 是js es6 变量声明的关键字
//    1.变量名num 代表 值所在的空间，在内存中声明了一个空间地址
//    2.index.html 运行在浏览器中，js是唯一语言
//    3.控制台通过变量名找到全局变量
// num:number = "fdf"  静态语言 c c++ java
// js 是弱类型语言 不太严格 好上手
let num; //声明num变量，数据类型是？
console.log(typeof num); //  typeof 变量的类型 undefined  他的类型到底是什么
// js 变量的类型由值决定
num = 11; //数字类型
num = '店小二'; //字符串类型
//const 常量
const name = "邹元昊"; //字符串类型
// 今天会取名，明天**必定行
// 命名很重要 是否有女朋友
// 1. 解决了js弱类型问题
let isSingle = true;
    // boolSingle = 23;

let numPrice = 12.3; 
let gf = null; // 声明变量，值为空
    gf = "小美";