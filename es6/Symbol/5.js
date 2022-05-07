// 数组去重  
const arr = [12, 5, 8, 8, 130, 44, 130, 'a', 'b', 'a'];
const obj = {};
arr.forEach(item => {
    // 去重
    obj[item] = item;  //
})
console.log(Object.keys(obj))