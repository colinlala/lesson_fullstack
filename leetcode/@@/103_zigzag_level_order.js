// 二叉树的锯齿形层序遍历
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
 var zigzagLevelOrder = function(root) {
    const res = [];
    if(root === null)return res;
    const queue = [];
    // 1为正向 -1反向
    let direction = 1;
    queue.push(root);
    while(queue.length > 0){
        const layerGoup = [];
        const n = queue.length;
        for(let i = 0 ;i < n ;i++){
            const target = queue.shift();
            // 或者在用unshift
            layerGoup.push(target.val);
            if(target.left !== null){
                queue.push(target.left);
            }
            if(target.right !== null){
                queue.push(target.right);
            }
        }
        if(direction === 1){
            res.push(layerGoup);
        }else {
            res.push(layerGoup.reverse());
        }
        direction *= -1;
    }
    return res;
};