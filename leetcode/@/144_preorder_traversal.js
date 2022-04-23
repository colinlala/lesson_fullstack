// 二叉树的前序遍历
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
// 递归
 var preorderTraversal = function(root) {
    const res = [];
    if(root === null)return res;
    const order = (node) =>{
        res.push(node.val)
        // 左节点还有节点就继续
        if(node.left !== null){
            order(node.left);
        }
        if(node.right !== null){
            order(node.right);
        }
    }
    order(root);
    return res;
};


// 迭代
// var preorderTraversal = function(root) {
//     const res = [];
//     if(root === null){
//         return res;
//     }
//     const stack = [];
//     stack.push(root);
//     while(stack.length > 0){
//         const cur = stack.pop();
//         res.push(cur.val);
//         // 栈先进后出，所以先右子，再左子
//         if(cur.right !== null){
//             stack.push(cur.right);
//         }
//         if(cur.left !== null){
//             stack.push(cur.left);
//         }
//     }
//     return res;
// };