/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-06-05 20:35:07
 * @LastEditTime: 2022-06-05 20:35:18
 * @Description: 函数防抖的实现
 */
// 函数防抖是指在事件被触发 n 秒后再执行回调，
//      如果在这 n 秒内事件又被触发，则重新计时。
//      这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。
function debounce(fn, wait) {
    let timer = null;

    return function () {
        let context = this,
            args = arguments;

        // 如果此时存在定时器的话，则取消之前的定时器重新记时
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }

        // 设置定时器，使事件间隔指定事件后执行
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, wait);
    };
}
