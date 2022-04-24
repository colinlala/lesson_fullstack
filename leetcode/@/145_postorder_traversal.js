// 二叉树的后序遍历
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
 var postorderTraversal = function(root) {
    const res = [];
    if(root === null)return res;
    const order = (node) =>{
        if(node.left !== null){
            order(node.left);
        }
        if(node.right !== null){
            order(node.right);
        }
        res.push(node.val);
    }
    order(root);
    return res;
};
// 迭代
// var postorderTraversal = function(root) {
//     const res = [];
//     if(root === null)return res;
//     const stack = [];
//     let temp = root;
//     // 尽快达到最左侧
//     while(temp !== null){
//         stack.push(temp);
//         temp = temp.left;
//     }
//     // 记录前一个弹出的值
//     let prev = null;
//     while(stack.length > 0){
//         const top = stack[stack.length-1];
//         if(top.right === null || (top.right !== null && prev === top.right)){
//             prev = stack.pop();
//             res.push(top.val);
//         } else {// 判断上一个弹出的值是否是当前处理的值
//             let temp2 = top.right;
//             while(temp2 !== null){
//                     stack.push(temp2);
//                     temp2 = temp2.left;
//             }
//         }
//     }
//     return res;
// };