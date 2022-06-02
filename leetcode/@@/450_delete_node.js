/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-06-02 22:25:37
 * @LastEditTime: 2022-06-02 22:25:41
 * @Description: 450 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    // 如果没有root直接返回null
    if (root === null) return null;
    // 如果查到了root.val等于key，那么就检查是否有左右子树
    // 如果没有左子树，说明是单一右子树，则返回右子树的孩子即可，反之亦然
    // 如果左右子树都有，则找当前root跟的后继，找到后继后删除，将后继的值赋值给根的值
    if (root.val === key) {
        if (root.left === null) return root.right;
        if (root.right === null) return root.left;
        let next = root.right;
        while (next.left) next = next.left;
        root.right = deleteNode(root.right, next.val);
        root.val = next.val;
        return root;
    }
    // 如果当前跟的值大于key，则向左子树删除查找，反之亦然
    if (root.val > key) {
        root.left = deleteNode(root.left, key);
    } else {
        root.right = deleteNode(root.right, key);
    }
    return root;
};