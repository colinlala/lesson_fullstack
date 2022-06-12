/*
 * @Date         : 2022-06-12 20:20:06
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-12 20:20:34
 * @description  : 404 左叶子之和
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
// DFS
 var sumOfLeftLeaves = function(root) {
    if(!root) return 0
    let res = 0
    // 前序遍历，参数除了结点外增加一个是否是左叶子的标志
    let preOrderTraversal = function(node,isLeft = false){
        // 结点不存在则返回
        if(!node) return 
        // 是左结点，且无左右子树，即叶子结点，则计算总和
        if(isLeft && !node.left && !node.right){
            res += node.val
        }
        // 遍历左子树
        preOrderTraversal(node.left,true)
        // 遍历右子树
        preOrderTraversal(node.right)
    }
    // 从根结点开始前序遍历
    preOrderTraversal(root)
    return res
};