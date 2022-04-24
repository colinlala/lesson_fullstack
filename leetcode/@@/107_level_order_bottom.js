// 二叉树的层序遍历ΙΙ
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
// 或者最后reverse也可以
var levelOrderBottom = function(root) {
    const res = [];
    if(root === null)return res;
    const queue = [];
    queue.push(root);
    while(queue.length > 0){
        const layerGoup = [];
        const n = queue.length;
        for(let i = 0 ;i < n ;i++){
            const target = queue.shift();
            layerGoup.push(target.val);
            if(target.left !== null){
                queue.push(target.left);
            }
            if(target.right !== null){
                queue.push(target.right);
            }
        }
        res.unshift(layerGoup);
    }
    return res;
};