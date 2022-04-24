// 二进制间隙
/**
 * @param {number} n
 * @return {number}
 */
 var binaryGap = function(n) {
    let befCount, count = 0, max = 0
    while(n) {
        count++
        const rest = n % 2
        n >>>= 1
        if (rest) {
            if (befCount) {
                max = Math.max(max, count - befCount)
            }
            befCount = count
        }
    }

    if (befCount) {
        max = Math.max(max, count - befCount)
    }

    return max;

};