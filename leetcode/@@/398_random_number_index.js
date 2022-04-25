/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 10:08:45
 * @LastEditors: ZYH
 * @LastEditTime: 2022-04-25 10:14:06
 * @Description: 随机数索引
 * 
 */

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.arr = nums;
    this.map = new Map();
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
    if (this.map.has(target)) {
        let arr = this.map.get(target);
        return arr[Math.floor(Math.random() * arr.length)];
    }
    let arr = [];
    for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i] == target) {
            arr.push(i);
        }
    }
    this.map.set(target, arr);
    return arr[Math.floor(Math.random() * arr.length)];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */