/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-05-24 23:05:05
 * @LastEditTime: 2022-05-24 23:17:16
 * @Description: 3 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const set = new Set(); //判断滑动窗口内是否有重复元素
    let right = 0,//滑动窗口右边界
        left = 0,//滑动窗口左边界
        maxLength = 0;
    if (s.length === 0) {//极端情况
        return 0;
    }
    for (right; right < s.length; right++) {
        if (!set.has(s[right])) {//当前元素不在set中 就加入set 然后更新最大长度，right++继续下一轮循环
            set.add(s[right]);
            maxLength = Math.max(maxLength, set.size);
        } else {
            //set中有重复元素不断让left++ 并删除窗口之外的元素 直到滑动窗口内没有重复的元素
            while (set.has(s[right])) {
                set.delete(s[left]);
                left++;
            }
            set.add(s[right]);//放心将s[right]加入set中
        }
    }
    return maxLength;
};