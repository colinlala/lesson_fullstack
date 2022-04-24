// 二叉树的右视图
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
 * @return {number[]}
 */
 var rightSideView = function(root) {
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
        // 拿出最右边的即可
        res.push(layerGoup[layerGoup.length-1]);
    }
    return res;
};