<<<<<<< HEAD
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 22:16:56
 * @LastEditTime: 2022-04-25 22:24:40
 * @Description: 回文链表
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
 * @return {boolean}
 */

// 1.
var isPalindrome = function (head) {
    if (!head.next) return true;
    const arr = [];
    let currentNode = head;
    // 遍历完链表，转数组
    while (currentNode) {
        arr.push(currentNode.val);
        currentNode = currentNode.next;
    }
    const len = arr.length;
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        if (arr[i] !== arr[len - 1 - i]) return false;
    }
    return true;
};


// 2.链表的后序遍历
// var isPalindrome = function(head) {
//     let left = head;
//     function traverse(right) {
//         if (right == null) return true;
//         let res = traverse(right.next);
//         res = res && (right.val === left.val);
//         left = left.next;
//         return res;
//     }
//     return traverse(head);
// };



// 3.快慢指针
//  var isPalindrome = function(head) {
//     // 反转 slower 链表
//     let right = reverse(findCenter(head));
//     let left = head;
//     // 开始比较
//     while (right != null) {
//         if (left.val !== right.val) {
//             return false;
//         }
//         left = left.next;
//         right = right.next;
//     }
//     return true;
// }
// function findCenter(head) {
//     let slower = head, faster = head;
//     while (faster && faster.next != null) {
//         slower = slower.next;
//         faster = faster.next.next;
//     }
//     // 如果 faster 不等于 null，说明是奇数个，slower 再移动一格
//     if (faster != null) {
//         slower = slower.next;
//     }
//     return slower;
// }
// function reverse(head) {
//     let prev = null, cur = head, nxt = head;
//     while (cur != null) {
//         nxt = cur.next;
//         cur.next = prev;
//         prev = cur;
//         cur = nxt;
//     }
//     return prev;
// }




=======
/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-25 22:16:56
 * @LastEditTime: 2022-04-25 22:24:40
 * @Description: 回文链表
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
 * @return {boolean}
 */

// 1.
var isPalindrome = function (head) {
    if (!head.next) return true;
    const arr = [];
    let currentNode = head;
    // 遍历完链表，转数组
    while (currentNode) {
        arr.push(currentNode.val);
        currentNode = currentNode.next;
    }
    const len = arr.length;
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        if (arr[i] !== arr[len - 1 - i]) return false;
    }
    return true;
};


// 2.链表的后序遍历
// var isPalindrome = function(head) {
//     let left = head;
//     function traverse(right) {
//         if (right == null) return true;
//         let res = traverse(right.next);
//         res = res && (right.val === left.val);
//         left = left.next;
//         return res;
//     }
//     return traverse(head);
// };



// 3.快慢指针
//  var isPalindrome = function(head) {
//     // 反转 slower 链表
//     let right = reverse(findCenter(head));
//     let left = head;
//     // 开始比较
//     while (right != null) {
//         if (left.val !== right.val) {
//             return false;
//         }
//         left = left.next;
//         right = right.next;
//     }
//     return true;
// }
// function findCenter(head) {
//     let slower = head, faster = head;
//     while (faster && faster.next != null) {
//         slower = slower.next;
//         faster = faster.next.next;
//     }
//     // 如果 faster 不等于 null，说明是奇数个，slower 再移动一格
//     if (faster != null) {
//         slower = slower.next;
//     }
//     return slower;
// }
// function reverse(head) {
//     let prev = null, cur = head, nxt = head;
//     while (cur != null) {
//         nxt = cur.next;
//         cur.next = prev;
//         prev = cur;
//         cur = nxt;
//     }
//     return prev;
// }




>>>>>>> 3060b42 (第一次Git提交所有文件)
