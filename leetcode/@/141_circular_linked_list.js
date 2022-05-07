<<<<<<< HEAD
// 环形链表
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    const res = [];
  while (head) {
    if (res.includes(head)) {
      return true;
    }
    res.push(head);
    head = head.next;
  }
  return false;

=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-21 10:47:54
 * @LastEditTime: 2022-04-26 17:38:11
 * @Description: 环形链表
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const res = [];
  while (head) {
    if (res.includes(head)) {
      return true;
    }
    res.push(head);
    head = head.next;
  }
  return false;

>>>>>>> 3060b42 (第一次Git提交所有文件)
};