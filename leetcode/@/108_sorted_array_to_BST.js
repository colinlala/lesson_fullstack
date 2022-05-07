<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 00:00:01
 * @LastEditors: ZYH
 * @LastEditTime: 2022-04-25 00:00:50
 * @Description: 将有序数组转换为二叉搜索树
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
    // 若为空树
    if(nums.length === 0) return null;
    // 中间为树根
    const mid = nums.length >> 1;
    const root = new  TreeNode(nums[mid]);

    // 递归左子树
    root.left = sortedArrayToBST(nums.slice(0, mid));
    // 递归右子树
    root.right = sortedArrayToBST(nums.slice(mid + 1))
    // 返回树
    return root;

=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 00:00:01
 * @LastEditors: ZYH
 * @LastEditTime: 2022-04-25 00:00:50
 * @Description: 将有序数组转换为二叉搜索树
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
    // 若为空树
    if(nums.length === 0) return null;
    // 中间为树根
    const mid = nums.length >> 1;
    const root = new  TreeNode(nums[mid]);

    // 递归左子树
    root.left = sortedArrayToBST(nums.slice(0, mid));
    // 递归右子树
    root.right = sortedArrayToBST(nums.slice(mid + 1))
    // 返回树
    return root;

>>>>>>> 3060b42 (第一次Git提交所有文件)
};