// 1. 数组和对象字面量 ， 类型都是对象，除了简单数据类型，其他的都是对象
// 2. 相同点：数据容器
// 3. 区别：数组用整数做下标，连续的0~arr.length-1。 对象是key:value

//数组是可遍历的对象
const arr = [1,2,3,4,5];

console.log(Array.isArray(arr));

// 区别obj是否是 数组 ，还是 对象字面量
// console.log(Object.prototype.toString.call(arr));  //  [object Array]
// console.log(typeof arr);
let obj = {
    name:'zyh',
    sex:'女',
    home:'南昌',
    hobbies:['打球','pp']
}
// console.log(Object.prototype.toString.call(obj));  //   [object Object]
// console.log(typeof obj);





//callback 回调函数
// 第二个参数是序号，第一个参数是数组里面的每一项
// arr.forEach(function(item,index){
//     console.log(item,index);
// })





// 计数循环  快  机器思维的代码  面向cpu编程
// for(let i = 0;i<arr.length;i++){
//     console.log(arr[i]);
// }


//   新的es6 方案   可读性更好 ，面向人类编程（没有下标）
// for(let item of arr){
//     console.log(item);
// }

// 对象的遍历里面

// for in 有点慢
// for (let a in arr){
//     console.log(a);
// }

