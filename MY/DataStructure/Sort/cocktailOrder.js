/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 13:42:37
 * @LastEditors: ZYH
 * @LastEditTime: 2022-04-25 14:10:50
 * @Description: 鸡尾酒排序
 * 
 */
// 从小到大排序
function cocktailSort(arr) {
    // n个数，单向需进行n-1趟操作，也就是i从0到n-2, 那么双向时i从0到（n-2）/2, 也就是i从0到 n/2-1, 所以限制 i<n/2 即可
    for (let i = 0; i < arr.length / 2; i++) {
        // 先从左往右排序，大的放在后面
        let isSorted = true;
        for (let j = i; j < arr.length - 1 - i; j++) {  // 注意初始条件是j = i 而不是j = 0, 因为进行1次双向排序后，最左侧就有1个值确定了顺序，下次排序不需要再从头开始
            if (arr[j] > arr[j + 1]) {  // 左>右，则交换
                isSorted = false;
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        if (isSorted) {
            break;
        }

        // 再从右往左排序，小的放在前面
        isSorted = true;    // 这里注意将isSorted置为true, 因为如果上面从左往右排序时isSorted变为false; 而进行下面的从右往左排序时发现已经不需要交换，但isSorted仍然为false,则不能跳出循环，又白白从左往右比较了一趟
        for (let k = arr.length - 1 - i; k > i; k--) { // 注意初始条件是 k=arr.length-1-i; k > i。 因为进行1次双向排序后，最左侧和最右侧都有1个值确定了顺序，下次排序不需要这2个值参与比较了
            if (arr[k] < arr[k - 1]) {  // 右<左，则交换
                isSorted = false;
                let temp = arr[k];
                arr[k] = arr[k - 1];
                arr[k - 1] = temp;
            }
        }
        if (isSorted) {
            break;
        }
    }
    return arr;
}
let arr = [2, 3, 4, 5, 6, 7, 8, 1];
cocktailSort(arr);
console.log(arr);

