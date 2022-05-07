<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-29 16:35:20
 * @LastEditTime: 2022-04-29 16:49:35
 * @Description: 对象的解构
 * 
 */
const forest = {
    location: 'Sweden',
    animals: 3,
    animalsTypes: ['Lions', 'Tigers', 'Bears']
};
const { location } = forest;  // 拿到forest的location的值
const { location: lo } = forest;  // 拿到forest的location的值，b并且改名

// 没有的就返回undefined， 有默认值就返回默认值
const { location: li, animals: a, nickname, ni = '未命名' } = forest;

const [lions, tigers, bears] = forest.animalsTypes;


console.log(location);
console.log(lo);
console.log(li, a, nickname, ni); // Sweden 3  undefined 未命名
console.log(lions, tigers, bears); //Lions Tigers Bears
=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-29 16:35:20
 * @LastEditTime: 2022-04-29 16:49:35
 * @Description: 对象的解构
 * 
 */
const forest = {
    location: 'Sweden',
    animals: 3,
    animalsTypes: ['Lions', 'Tigers', 'Bears']
};
const { location } = forest;  // 拿到forest的location的值
const { location: lo } = forest;  // 拿到forest的location的值，b并且改名

// 没有的就返回undefined， 有默认值就返回默认值
const { location: li, animals: a, nickname, ni = '未命名' } = forest;

const [lions, tigers, bears] = forest.animalsTypes;


console.log(location);
console.log(lo);
console.log(li, a, nickname, ni); // Sweden 3  undefined 未命名
console.log(lions, tigers, bears); //Lions Tigers Bears
>>>>>>> 3060b42 (第一次Git提交所有文件)
