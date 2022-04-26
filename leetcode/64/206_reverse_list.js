/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-26 09:53:18
 * @LastEditTime: 2022-04-26 09:53:19
 * @Description: 反转链表
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prev = null;
    let cur = head;
    while (cur !== null) {
        let temp = cur.next;
        cur.next = prev;
        prev = cur;
        cur = temp;
    }
    return prev;
};

// var reverseList = function(head) {
//     if (head == null || head.next == null) return head;
//     let last = reverseList(head.next);
//     head.next.next = head;
//     head.next = null;
//     return last;

// };
