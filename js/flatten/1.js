/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-22 17:34:51
 * @LastEditTime: 2022-05-22 17:44:04
 * @Description:
 */
const _ = require('lodash');  // 工具函数  npm install lodash

console.log(_.flatten([1, 2, [3], [4, 5]]));   // [ 1, 2, 3, 4, 5 ]
// [1, 2, [3], [4, 5]]  => [1, 2, 3, 4, 5]
// 1.快速搞定
    // - for
    // - Array.isArray
    // - ... concat
// 2.