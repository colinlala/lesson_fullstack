/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-24 15:38:22
 * @LastEditTime: 2022-05-24 15:59:13
 * @Description: 
 */
// 事件  异步
// 订阅公众号？
// setTimeout  addEventListener   订阅关系
let eventEmiter = {
    list: {
        'article': []
    },  // 所有的订阅者
    on(event, fn) {
        // 订阅关系
        // 没有吧fn 立即执行
        this.list[event].push(fn);
        // console.log(this.list[event]);
    },
    emit(event, title) {
        this.list[event].forEach(fn => {
            fn(title)
        });
    }
};


function user1(content) {
    console.log('用户1订阅了', content)
}
function user2(content) {
    console.log('用户2订阅了', content)
}
// on 代表订阅；emit 代表发布内容
// 先订阅  再推送文章    异步的
eventEmiter.on('article', user1);
eventEmiter.on('article', user2);
setTimeout(() => {
    eventEmiiter.emit('article', 'JavaScript 发布-订阅模式');
}, 2000)


