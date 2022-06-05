/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-06-05 17:03:40
 * @LastEditTime: 2022-06-05 17:16:29
 * @Description: 103 二叉树的锯齿形层序遍历
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    let res = [];
    if (!root) return res;
    // 根节点入队
    const queue = [root];
    // 是否需要反转的标志位
    let flag = false;
    // 当队列还有值时，一直执行
    while (queue.length) {
        let len = queue.length;
        res.push([]);
        while (len--) {
            // 获取根节点，根节点出队
            const n = queue.shift();
            // 根节点加入res栈顶元素
            res[res.length - 1].push(n.val);
            // 队头左右节点入队
            n.left && queue.push(n.left);
            n.right && queue.push(n.right);
        }
        // 每隔一层，反转一次
        flag && res[res.length - 1].reverse();
        flag = !flag;
    }
    return res;
};

// var zigzagLevelOrder = function (root) {
//     const res = [];
//     if (root === null) return res;
//     const queue = [];
//     // 1为正向 -1反向
//     let direction = 1;
//     queue.push(root);
//     while (queue.length > 0) {
//         const layerGoup = [];
//         const n = queue.length;
//         for (let i = 0; i < n; i++) {
//             const target = queue.shift();
//             // 或者在用unshift
//             layerGoup.push(target.val);
//             if (target.left !== null) {
//                 queue.push(target.left);
//             }
//             if (target.right !== null) {
//                 queue.push(target.right);
//             }
//         }
//         if (direction === 1) {
//             res.push(layerGoup);
//         } else {
//             res.push(layerGoup.reverse());
//         }
//         direction *= -1;
//     }
//     return res;
// };