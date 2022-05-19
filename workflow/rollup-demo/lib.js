/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-19 14:44:56
 * @LastEditTime: 2022-05-19 15:19:58
 * @Description: lib库
 */
// lib库 （工具库）
var counter = 3;
function inCounter() {
    ++counter;
}
module.exports = {
    // counter,
    // 方法
    get counter() {
        return counter;
    },
    inCounter
}