/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-26 17:29:30
 * @LastEditTime: 2022-04-26 17:33:26
 * @Description: 山脉数组的峰顶索引
 * 
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
//  二分搜索
// 如果正在上坡，那么峰顶一定在后面，否则在前面
// A[mid] < A[mid + 1] -> 上坡 -> low = mid + 1
// else -> high = mid

var peakIndexInMountainArray = function (arr) {
    let low = 0;
    let high = arr.length - 1;

    while (low < high) {
        let mid = low + ((high - low) >> 1);

        if (arr[mid] < arr[mid + 1]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
};
