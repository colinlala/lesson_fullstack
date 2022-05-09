//  数字转手机号
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]  转 （123）456-789
// 代理  翻墙  es6 非常重要的类 
const phoneHandler = {
    // 监听写操作
    set(target, name, value) {
        console.log(target, name, value);
        // 正则  [] 匹配一个字符  
        target[name] = value.match(/[0-9]/g).join('');
    },
    // 监听读操作
    get(target, name) {
        // console.log('------------------');
        // ()分组
        return target[name].replace(/([0-9]{3})(\d{3})(\d{4})/, '($1) $2-$3');
    }
};
// {}
// 对{}的操作转给phoneHandler
const phoneNumbers = new Proxy({}, phoneHandler);
// 写操作 
// phoneNumbers.phone = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
phoneNumbers.phone = 'rfsfsdfsdf1234567890lkdgfndfn';

// phoneNumbers.get('phone')

// 读操作
console.log(phoneNumbers.phone)