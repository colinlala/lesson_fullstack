/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-25 14:17:33
 * @LastEditTime: 2022-05-25 14:47:13
 * @Description: Promise的小问题(得先了解原码)
 */
Promise.resolve()
    .then(() => {
        console.log(0);
        return Promise.resolve(4);  // return Promise.resolve(4).then(res=>res)
    })
    .then(res => {
        console.log(res);
    });
Promise.resolve()
    .then(() => {
        console.log(1);
    })
    .then(() => {
        console.log(2);
    })
    .then(() => {
        console.log(3);
    })
    .then(() => {
        console.log(5);
    })
    .then(() => {
        console.log(6);
    });
// console.log('-------------')
// console.log(Promise.resolve().then(() => console.log(1)))




// 1 3 2 4
// Promise.resolve()
//     .then(() => {
//         console.log(1)
//         // return Promise.resolve()   // 1 3 4 2
//     })
//     .then(() => {
//         console.log(2)
//     });
// Promise.resolve()
//     .then(() => {
//         console.log(3)
//     })
//     .then(() => {
//         console.log(4)
//     });