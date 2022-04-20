// 文件的最长绝对路径
// 1. \n分大层，\t深度
// 2. 主要利用\t和栈的大小来判断出栈进战
//     \t的个数如果小于栈的个数，说明是另一条线路的路径，此时要出栈，知道不小于栈的大小
//     如果大于，说明还是同一个层级的路径，此时求大小进栈即可

/**
 * @param {string} input
 * @return {number}
 */
 var lengthLongestPath = function(input) {
    let stack = [];
    stack.push(0);
    let result = 0;
    
    let string  = input.split('\n');
    
    for (let i=0; i< string.length; i++) {
    
        //求/t的个数
        let level  = string[i].lastIndexOf('\t')+1;
    
        //判断是否出栈，不同路径的就出栈
        while (level + 1 < stack.length) {
            stack.pop();
        }
        let length = stack[stack.length-1] + (string[i].length - level +1);
        stack.push(length);
        if (string[i].includes('.')) {
            result = Math.max(result, length -1);
        }
    }
    return result;
};


// var lengthLongestPath = function (input) {
//     let res = 0, pre = []
//     const arr = input.split('\n').map(a => a.split('\t'))
//     arr.forEach(a => {
//         let path = []
//         a.forEach((b, i) => {
//             path.push(b || pre[i])
//             if (b.indexOf('.') >= 0) {
//                 res = Math.max(res, path.join('/').length)
//             }
//         })
//         pre = path
//     })
//     return res
// };

    

