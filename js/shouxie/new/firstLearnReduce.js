const arr = [1, 2, 3, 4, 5, 6];
// 加起来
// let res = 0;
// for (let num of arr) {
//     res += num;
// }
// console.log(res);

const initialValue = 0;
console.log(arr.reduce((total, currentValue) => {
    console.log(total, currentValue);
    // 0 1
    // 1 2
    // 3 3
    // 6 4
    // 10 5
    // 15 6
    // 21
    // currentValue数组的元素，total + currentValue相加的结果变成total
    return total + currentValue;
}, initialValue))