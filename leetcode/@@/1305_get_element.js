/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-01 21:11:01
 * @LastEditTime: 2022-05-01 21:11:29
 * @Description: 两棵二叉搜索树中的所有元素
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
    let arr = [];
    dfs(root1);
    dfs(root2);
    function dfs(root) {
        if (root === null) {
            return;
        }
        arr.push(root.val);
        dfs(root.left);
        dfs(root.right);
    }
    res = arr;
    return res.sort((x, y) => {
        return x - y;
    });

};