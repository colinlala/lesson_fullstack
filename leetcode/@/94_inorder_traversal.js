// 二叉树的中序遍历
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
 var inorderTraversal = function(root) {
    const res = [];
    if(root === null) return res;
    const order = (node) =>{
        if(node.left !== null){
            // 如果左节点有值，就展开
            order(node.left);
        }
        res.push(node.val);
        if(node.right !== null){
            order(node.right);
        }
    }
    order(root);
    return res;
};

// 迭代
// var inorderTraversal = function(root) {
//     const res = [];
//     if(root === null) return res;
//     const stack = [];
//     let temp = root;
//     while(temp !== null){
//         stack.push(temp);
//         temp = temp.left;
//     }
//     while(stack.length > 0){
//         const cur = stack.pop();
//         res.push(cur.val);
//         if(cur.right !== null){
//             let temp2 = cur.right;
//             while(temp2 !== null){
//                 stack.push(temp2);
//                 temp2 = temp2.left;
//             }
//         }
//     }
//     return res;
// };