/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-27 17:28:54
 * @LastEditTime: 2022-04-27 17:32:56
 * @Description: 计数排序 优化 浪费的空间
 * 
 */
function countSortV1(arr) {
    // 得到数组最大值
    let maxValue = Math.max(...arr);
    let minValue = Math.min(...arr);

    // max - min + 1不会浪费空间 也可以存复数
    let array = new Array(maxValue - minValue + 1).fill(0);
    // 遍历数组，填充技术组
    for (let v of arr) {
        array[v - minValue]++;
    }
    let result = [];
    // 把结果push进新数组
    for (let i = 0; i < array.length; i++) {
        let cur = array[i];
        while (cur) {
            result.push(i + minValue);
            cur--;
        }
    }
    return result;
}

const array = [-101, 109, 100, 106, 105, 103, 110, 110, 103, 109];
console.log(countSortV1(array));