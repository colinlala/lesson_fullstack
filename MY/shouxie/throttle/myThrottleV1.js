/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-06-05 20:37:16
 * @LastEditTime: 2022-06-05 20:37:32
 * @Description: 手写节流
 */
// 方案1  连续点击的话，每过 wait 秒执行一次
function throttle(fn, wait) {
    let bool = true
    return function () {
        if (!bool) return
        bool = false
        setTimeout(() => {
            // fn() // fn中this指向window
            fn.call(this, arguments) // fn中this指向bool  下面同理
            bool = true
        }, wait)
    }
}
// 方案2 连续点击的话，第一下点击会立即执行一次 然后每过 wait 秒执行一次
function throttle(fn, wait) {
    let date = Date.now()
    return function () {
        let now = Date.now()
        // 用当前时间 减去 上一次点击的时间 和 传进来的时间作对比
        if (now - date > wait) {
            fn.call(this, arguments)
            date = now
        }
    }
}
// 方案三 结合
function throttle(fn, wait) {
    let bool = true, date = Date.now(), timer = null;
    return function () {
        clearTimeout(timer)
        let now = Date.now();
        let lave = wait - (now - date)
        if (lave <= 0) {
            fn.call(this, arguments)
            date = Date.now()
        } else {
            timer = setTimeout(fn, lave)
        }
    }
}
function sayThrottle() {
    console.log("节流成功！")
}
btn.addEventListener("click", throttle(sayThrottle, 1000))
