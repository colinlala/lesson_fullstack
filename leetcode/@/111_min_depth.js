/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-24 23:50:30
 * @LastEditors: ZYH
 * @LastEditTime: 2022-04-24 23:50:31
 * @Description: 二叉树的最小深度
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
 * @param {TreeNode} root
 * @return {number}
 */
 var minDepth = function(root) {
    if (root === null) return 0;
    const queue = [root];
    let step = 1;
    const isNull = x => x === null;
    while (queue.length) {
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            const cur = queue.shift();
            if (isNull(cur.left) && isNull(cur.right)) return step;
            if (!isNull(cur.left)) queue.push(cur.left);
            if (!isNull(cur.right)) queue.push(cur.right);
        }
        step++;
    }
    return step;
};
