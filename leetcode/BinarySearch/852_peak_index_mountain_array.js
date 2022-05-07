<<<<<<< HEAD
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
=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-26 17:29:30
 * @LastEditTime: 2022-04-26 17:36:52
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


// var peakIndexInMountainArray = function (arr) {
//     // 处理临界情况
//   if (!arr || arr.length === 0) return -1;
//   if (arr.length === 1) return arr[0];
//   let left = 0,
//    right = arr.length - 1;
//   while (left < right) {
//     let mid = Math.floor((right - left) / 2) + left;
//     if (arr[mid] > arr[mid + 1]) {
//       right = mid;
//     } else {
//       left = mid + 1;
//     }
//   }
//   return left;
// };
>>>>>>> 3060b42 (第一次Git提交所有文件)
