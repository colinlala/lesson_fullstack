// 20 有效的括号
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const n = s.length;
    // 如果长度不是偶数，那肯定不能匹配
    if (n % 2 === 1) {
      return false;
    }
    let map = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
    let stack = [];
    for (let index = 0; index < s.length; index++) {
      const element = s[index];
      if (map[stack[stack.length - 1]] == element) {
        stack.pop();
      } else {
        stack.push(element);
      }
    }
    return !stack.length;
  
};