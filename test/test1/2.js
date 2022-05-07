<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-29 16:01:52
 * @LastEditTime: 2022-04-29 16:16:18
 * @Description: reset 运算符  ...args  合并对象Object.assign
 * 
 */
const city = {
    name: '新建区',
    population: '100万'
};
const location = {
    longitude: '115.800062',
    // 纬度
    latitude: '28.629991'
}
// 合并两个对象
// es6   reset 运算符  ...args

// const hometown = Object.assign(city, location);
const hometown = { ...city, ...location }

console.log(hometown);
console.log(hometown.name);
console.log(hometown.population);
console.log(hometown.longitude);
console.log(hometown.latitude);
=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-29 16:01:52
 * @LastEditTime: 2022-04-29 16:16:18
 * @Description: reset 运算符  ...args  合并对象Object.assign
 * 
 */
const city = {
    name: '新建区',
    population: '100万'
};
const location = {
    longitude: '115.800062',
    // 纬度
    latitude: '28.629991'
}
// 合并两个对象
// es6   reset 运算符  ...args

// const hometown = Object.assign(city, location);
const hometown = { ...city, ...location }

console.log(hometown);
console.log(hometown.name);
console.log(hometown.population);
console.log(hometown.longitude);
console.log(hometown.latitude);
>>>>>>> 3060b42 (第一次Git提交所有文件)
