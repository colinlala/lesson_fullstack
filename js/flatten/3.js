// es6 
function flatten(arr) {
    while (arr.some(item => Array.isArray(item))) {
        // 一次只能展开一层
        // [1,2,[3,[4,5]]] 第一次赋值前
        // [1,2,3,[4,5]]  第二次赋值前
        console.log('-------------------')
        console.log('while判断完：', arr)
        arr = [].concat(...arr);
        console.log('arr赋值完：', arr)
        console.log('-------------------')
    }
    return arr;
}
console.log(flatten([1, 2, [3, [4, 5]]]));   // [ 1, 2, 3, 4, 5 ]
console.log(flatten([1, 2, [3], [4, [5, 6]]]));

// let arr = [1, 2]
// console.log(arr.some(item => Array.isArray(item)))  // false
// console.log(arr.every(item => Array.isArray(item)))  // false
// let arr1 = [1, 2, [3]]
// console.log(arr1.some(item => Array.isArray(item)))  // true
// console.log(arr1.every(item => Array.isArray(item)))  // false

// // array.every 每一项都符合返回true
// let arr2 = [[1], [2], [3]]
// console.log(arr2.every(item => Array.isArray(item)))  // true


