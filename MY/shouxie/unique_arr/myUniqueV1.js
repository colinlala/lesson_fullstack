<<<<<<< HEAD
let array = [1,2,2, 1, "1", "1", true, true, "true", {}, {}, "{}", null, null, undefined, undefined];
/**
 * @func 数组去重 
 * @params  arr 数组
 * @returns array
*/
function myUnique(arr){
    // 用Set生成数组 会自动去重。
    let array = new Set(arr);
    // Array.from() 方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
    let cur = Array.from(array);
    return cur;
}
    
=======
let array = [1,2,2, 1, "1", "1", true, true, "true", {}, {}, "{}", null, null, undefined, undefined];
/**
 * @func 数组去重 
 * @params  arr 数组
 * @returns array
*/
function myUnique(arr){
    // 用Set生成数组 会自动去重。
    let array = new Set(arr);
    // Array.from() 方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
    let cur = Array.from(array);
    return cur;
}
    
>>>>>>> 3060b42 (第一次Git提交所有文件)
console.log(myUnique(array));