// 二叉树的最大深度
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
 var maxDepth = function(root) {
    const res = [];
    let num = 0;
    if(root === null)return num;
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
        num++;
        res.push(layerGoup);
    }
    return num;
};

// var maxDepth = function(root) {

//     if (root == null) return 0;
//     const queue = [];
//     let deep = 0;
//     queue.push(root);
//     while (queue.length) {
//         deep++;
//         const n = queue.length;
//         for (let i = 0; i < n; i++) {
//             const node = queue.shift();
//             if(node.left) queue.push(node.left);
//             if(node.right) queue.push(node.right);
//         }
//     }
//     return deep;
// }
