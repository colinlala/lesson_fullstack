<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-28 09:40:56
 * @LastEditTime: 2022-04-28 10:31:01
 * @Description: 归并排序 O(nlogn) 稳定 非原地
 * 
 */
function mergeSort(arr) {
    const len = arr.length;
    if (len < 2) {
        return arr;
    }
    let mid = Math.floor(len / 2),
        // 拆分为两个数组 

        // 从0到mid之前
        left = arr.slice(0, mid),
        // 包括mid以后
        right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    const res = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            res.push(left.shift());
        } else {
            res.push(right.shift());
        }
    }
    while (left.length) {
        res.push(left.shift());
    }
    while (right.length) {
        res.push(right.shift());
    }
    return res;
}

const array = [23, 35, 75, 24, 68, 1, 26, 58, 90, 89, 43, 0, 45, 2];
console.log(array);
console.log(mergeSort(array));
// 1.拆分数组
//      第一步：[23,35,75,24,68,1,26]   |   [58,90,89,43,0,45,2]
//      第二步：[23,35,75]、[24,68,1,26]   |   [58,90,89]、[43,0,45,2]
//      第三步：[23]、[35,75]、[24,68]、[1,26]    |     [58]、[90,89]、[43,0]、[45,2]
//      第四步：...
// 2.排序
//      第一步：[23]就一位不需要排序。[35,75]35和75比较，小的就push进res，然后把剩下的也push进res。[23]和[35,75]比较第一位元素大小，小的push。[23,35,75]。
//      第二步：[24,68]24和68比较，小的就push。[1,26]1和26比较，小的push。[24,68]和[1,26]比较第一位元素大小，小的push。[1,24,26,68]
//      第三步：[23,35,75]和[1,24,26,68]比较第一位元素，小的push。[1,23,24,26,35,68,75]
//      第四步：[58]就一位不需要排序。[90,89]90和89比较，小的就push进res，然后把剩下的也push进res。[58]和[89,90]比较第一位元素大小，小的push。[58,89,90]。
=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-28 09:40:56
 * @LastEditTime: 2022-04-28 10:31:01
 * @Description: 归并排序 O(nlogn) 稳定 非原地
 * 
 */
function mergeSort(arr) {
    const len = arr.length;
    if (len < 2) {
        return arr;
    }
    let mid = Math.floor(len / 2),
        // 拆分为两个数组 

        // 从0到mid之前
        left = arr.slice(0, mid),
        // 包括mid以后
        right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    const res = [];
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            res.push(left.shift());
        } else {
            res.push(right.shift());
        }
    }
    while (left.length) {
        res.push(left.shift());
    }
    while (right.length) {
        res.push(right.shift());
    }
    return res;
}

const array = [23, 35, 75, 24, 68, 1, 26, 58, 90, 89, 43, 0, 45, 2];
console.log(array);
console.log(mergeSort(array));
// 1.拆分数组
//      第一步：[23,35,75,24,68,1,26]   |   [58,90,89,43,0,45,2]
//      第二步：[23,35,75]、[24,68,1,26]   |   [58,90,89]、[43,0,45,2]
//      第三步：[23]、[35,75]、[24,68]、[1,26]    |     [58]、[90,89]、[43,0]、[45,2]
//      第四步：...
// 2.排序
//      第一步：[23]就一位不需要排序。[35,75]35和75比较，小的就push进res，然后把剩下的也push进res。[23]和[35,75]比较第一位元素大小，小的push。[23,35,75]。
//      第二步：[24,68]24和68比较，小的就push。[1,26]1和26比较，小的push。[24,68]和[1,26]比较第一位元素大小，小的push。[1,24,26,68]
//      第三步：[23,35,75]和[1,24,26,68]比较第一位元素，小的push。[1,23,24,26,35,68,75]
//      第四步：[58]就一位不需要排序。[90,89]90和89比较，小的就push进res，然后把剩下的也push进res。[58]和[89,90]比较第一位元素大小，小的push。[58,89,90]。
>>>>>>> 3060b42 (第一次Git提交所有文件)
//      第五步：...