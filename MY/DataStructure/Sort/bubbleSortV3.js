<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 13:56:02
 * @LastEditors: ZYH
 * @LastEditTime: 2022-04-25 14:08:58
 * @Description: 冒泡排序优化
 * 
 */

function bubbleSortV3(arr) {
    // 记录最后一次交换的位置
    let lastExchangeIndex = 0;
    // 无序数列的边界，每次比较只需要比到此为止
    let sortBorder = arr.length - 1;
    for (let i = 0; i < arr.length - 1; i++) {
        // 有序标记，每一轮都是true
        let isSorted = true;

        for (let j = 0; j < sortBorder; j++) {
            let temp = 0;
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                // 有元素交换，所以不是有序的
                isSorted = false;
                lastExchangeIndex = j;
            }
        }
        sortBorder = lastExchangeIndex;
        if (isSorted) {
            break;
        }
    }
    console.log(arr);
}

let array = [3, 4, 2, 1, 5, 6, 7, 8, 9];
console.log(bubbleSortV3(array))
=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 13:56:02
 * @LastEditors: ZYH
 * @LastEditTime: 2022-04-25 14:08:58
 * @Description: 冒泡排序优化
 * 
 */

function bubbleSortV3(arr) {
    // 记录最后一次交换的位置
    let lastExchangeIndex = 0;
    // 无序数列的边界，每次比较只需要比到此为止
    let sortBorder = arr.length - 1;
    for (let i = 0; i < arr.length - 1; i++) {
        // 有序标记，每一轮都是true
        let isSorted = true;

        for (let j = 0; j < sortBorder; j++) {
            let temp = 0;
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                // 有元素交换，所以不是有序的
                isSorted = false;
                lastExchangeIndex = j;
            }
        }
        sortBorder = lastExchangeIndex;
        if (isSorted) {
            break;
        }
    }
    console.log(arr);
}

let array = [3, 4, 2, 1, 5, 6, 7, 8, 9];
console.log(bubbleSortV3(array))
>>>>>>> 3060b42 (第一次Git提交所有文件)
