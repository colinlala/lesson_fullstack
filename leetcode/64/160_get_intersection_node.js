/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-22 22:56:16
 * @LastEditTime: 2022-05-22 23:00:46
 * @Description: 160 相交链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 1. 如果两条链长度一样，有相交点，总会遍历到
// 2. 如果两条链长度不一样，有相交点，a走完自己的 + 公共部分 + b === b走完自己的 + 公共部分 + a，所以相交点就是a==b的点
// 3. 如果没有相交点，遍历完直接返回null。
var getIntersectionNode = function (headA, headB) {
    let A = headA, B = headB
    while (A !== B) {
        if (A) {
            A = A.next
        } else {
            A = headB
        }
        if (B) {
            B = B.next
        } else {
            B = headA
        }
    }
    return A

};