/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-27 09:38:32
 * @LastEditTime: 2022-04-27 09:38:32
 * @Description: 合并两个有序数组
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let e = nums1.length - 1
    let mi = m - 1
    let ni = n - 1
    while (mi >= 0 && ni >= 0) {
        if (nums1[mi] > nums2[ni]) {
            nums1[e] = nums1[mi]
            mi--
        } else {
            nums1[e] = nums2[ni]
            ni--
        }
        e--
    }
    while (mi >= 0) {
        nums1[e] = nums1[mi]
        mi--
        e--
    }
    while (ni >= 0) {
        nums1[e] = nums2[ni]
        ni--
        e--
    }
    return nums1

};