/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-06-05 16:49:12
 * @LastEditTime: 2022-06-05 19:14:47
 * @Description: 222 完全二叉树的节点个数
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
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
    if (root == null) return 0;
    let left = right = root;
    let leftcount = 0, rightcount = 0;
    // 一直左子树查，层数++
    while (left != null) {
        left = left.left;
        leftcount++;
    }
    while (right != null) {
        right = right.right;
        rightcount++;
    }
    // 满二叉树
    if (leftcount === rightcount) {
        return Math.pow(2, leftcount) - 1;
    }
    return 1 + countNodes(root.left) + countNodes(root.right);
};