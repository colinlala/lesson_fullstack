<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-27 10:07:01
 * @LastEditTime: 2022-04-27 17:17:24
 * @Description: 计数排序
 * 
 */
function countSort(arr) {
    // 得到数组最大值
    let maxValue = Math.max(...arr); // es6的骚操作
    // 因为数组是从0开始的，我们要记录第n个元素需要创建长度为n+1的数组
    let array = new Array(maxValue + 1).fill(0);
    // 遍历数组，填充技术组
    for (let i = 0; i < arr.length; i++) {
        array[arr[i]] = (array[arr[i]] || 0) + 1;
    }
    let result = [];
    // 把结果push进新数组
    for (let i = 0; i < array.length; i++) {
        let cur = array[i];
        while (cur) {
            result.push(i);
            cur--;
        }
    }
    return result;
}
// const array = [4, 4, 6, 5, 3, 2, 8, 1, 7, 5, 6, 0, 10];
=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-27 10:07:01
 * @LastEditTime: 2022-04-27 17:17:24
 * @Description: 计数排序
 * 
 */
function countSort(arr) {
    // 得到数组最大值
    let maxValue = Math.max(...arr); // es6的骚操作
    // 因为数组是从0开始的，我们要记录第n个元素需要创建长度为n+1的数组
    let array = new Array(maxValue + 1).fill(0);
    // 遍历数组，填充技术组
    for (let i = 0; i < arr.length; i++) {
        array[arr[i]] = (array[arr[i]] || 0) + 1;
    }
    let result = [];
    // 把结果push进新数组
    for (let i = 0; i < array.length; i++) {
        let cur = array[i];
        while (cur) {
            result.push(i);
            cur--;
        }
    }
    return result;
}
// const array = [4, 4, 6, 5, 3, 2, 8, 1, 7, 5, 6, 0, 10];
>>>>>>> 3060b42 (第一次Git提交所有文件)
// console.log(countSort(array));