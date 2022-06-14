/*
 * @Date         : 2022-06-14 22:26:17
 * @LastEditors  : colinlala
 * @LastEditTime : 2022-06-14 22:26:26
 * @description  : 993 二叉树的堂兄弟节点
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
 var isCousins = function(root, x, y) {
    let queue = [ root ]
    while( queue.length ){
        let len = queue.length
        let sum = x + y
        while(len--){
            let node = queue.shift()
            let {val, left, right} = node
            if( left && right && (x === left.val && y === right.val || x === right.val && y === left.val) ) return false // 亲兄弟
            if (x === val || y === val ) sum -= val
            if( sum === 0 ) return true
            if( left ) queue.push(left)
            if( right ) queue.push(right)
        }
    }
    return false

};