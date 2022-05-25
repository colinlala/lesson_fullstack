/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-25 15:13:29
 * @LastEditTime: 2022-05-25 16:45:23
 * @Description: 异步解决方案二Generator
 */
// Generator函数
// 1. function关键字与函数名之间有一个*
// 2. 函数体内部使用 yield 表达式，定义不同的内部状态
// function* g() {
//     yield '钱';
//     yield '多';
//     return '多'
// }



// 调用
// 1. Generator 函数调用，不会立即执行
// 2. 执行会返回一个迭代器(Iterator)对象, 在迭代器上可以调用  next() 方法
//              会返回一个对象 {value: res, done: false},
//              value 的值为 yield 之后表达式的值，done 的值表示迭代器，是否已经执行完毕
// 3. 执行下一个 yield  或 return
// const getObj = g()
// console.log(getObj)   // Object [Generator] {}
// console.log(getObj.next())   // { value: '钱', done: false }
// console.log(getObj.next())   // { value: '多', done: false }
// console.log(getObj.next())   // { value: '多', done: true }
// console.log(getObj.next())   // { value: undefined, done: true }



// 遍历
// for (let item of g()) {
//     console.log(item)  // 只遍历done为false的
// }



// next()传参
// 做为前一个yield 表达式的返回值
// function* f(a) {
//     const b = 2 * (yield (a - 1));
//     // b=12
//     const c = yield (b / 4);
//     // c=3
//     return (a - b + c);
//     // 2-12+3=-7
// }
// const o = f(2);
// console.log(o.next());   // { value: 1, done: false }
// console.log(o.next(6));  // { value: 3, done: false }  6传给了前一个yield的值，(6*2)/4=3
// console.log(o.next(3));  // { value: -7, done: true }  3传给了前一个yield的值


// ------------------------------------------------------------------------------------------------------------------------------


// yield * 表达式
// function* g1() {
//     yield '冰'
//     yield '墩'
//     yield '墩'
// }
// function* g3() {
//     yield 'la'
//     yield* g1();
//     yield 'a'
//     yield 'a'
// }
// for (let item of g3()) {
//     console.log(item)
// }


// 等同于
// 如果在Generator函数内调用另一个Generator函数，需要在前者的函数体内手动遍历
// function* g2() {
//     yield '雪'
//     // 手动遍历
//     for (let item of g1()) {
//         console.log(item)
//     }
//     yield '容'
//     yield '融'
// }
// for (let item of g2()) {
//     console.log(item)
// }
// 雪
// 冰
// 墩
// 墩
// 容
// 融

// -------------------------------------------------------------------------------------------------------------
// 生成器函数的应用
// React的Redux-Saga(dva)中间件
// 需求: 每间隔1s就按照顺序输出1,2,3,4,5
// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i)    // 实际1s后同时输出1,2,3,4,5
//     }, 1000)
// }

const delay = n => new Promise(resolve => {
    setTimeout(() => {
        console.log(n)
    }, 1000)
});

function* g() {
    // 这个for是个异步操作，需要同步化。Generator封装一下
    for (let i = 1; i <= 5; i++) {
        const x = yield delay(i)
        console.log(x);
    }
}
// 执行启动Generator函数
function co(g) {
    const o = g()
    next()
    function next(a) {
        const { value, done } = o.next(a)
        if (done) return;
        value.then(data => next(data))
    }
}
co(g)


