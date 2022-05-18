/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-18 16:45:03
 * @LastEditTime: 2022-05-18 17:04:15
 * @Description: 148 排序链表
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 归并排序
var sortList = function (head) {
    if (!head || !head.next) return head;
    let slow = head, fast = head;
    let preSlow = null;
    while (fast && fast.next) {
        preSlow = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    preSlow.next = null;
    const left = sortList(head);
    const right = sortList(slow);
    return merge(left, right);
};

function merge(left, right) {
    const dummy = new ListNode(0);
    let prev = dummy;
    while (left && right) {
        if (left.val < right.val) {
            prev.next = left;
            left = left.next;
        } else {
            prev.next = right;
            right = right.next;
        }
        prev = prev.next;
    }
    if (left) prev.next = left;
    if (right) prev.next = right;
    return dummy.next;
}

