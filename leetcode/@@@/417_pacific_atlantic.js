/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-27 08:57:19
 * @LastEditTime: 2022-04-27 09:06:41
 * @Description: 太平洋大西洋水流问题
 * 
 */
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const point = [0, 1, 0, -1, 0];
var pacificAtlantic = function (heights) {

    const rowLen = heights.length;
    const colLen = heights[0].length;
    //记录从不同海洋能流动到当前位置话 值为1；
    const dpPo = Array.from({ length: rowLen }, () => new Array(colLen).fill(0));
    const dpAo = Array.from({ length: rowLen }, () => new Array(colLen).fill(0));
    const res = [];
    function dfs(dp, i, j) {
        if (dp[i][j] === 1) return;  //当前dp位置已经从同一个海洋流到过就return；
        dp[i][j] = 1;    //否则当前点值设置为1  记录流到过；
        if (dpPo[i][j] === 1 && dpAo[i][j] === 1) res.push([i, j])  //如果当前点两个海洋的水都流到过，就是满足答案的点；
        for (let k = 0; k <= 3; k++) {
            const [ni, nj] = [i + point[k], j + point[k + 1]];
            //如果新坐标点在范围内，且新坐标点的值大于等于旧坐标点的值就递归深度搜索；
            if (ni >= 0 && nj >= 0 && ni < rowLen && nj < colLen && heights[ni][nj] >= heights[i][j]) {
                dfs(dp, ni, nj);
            }
        }
    }
    //上下边海洋开始往高处流
    for (let i = 0; i < colLen; i++) {
        dfs(dpPo, 0, i);
        dfs(dpAo, rowLen - 1, i);
    }
    //左右边海洋开始往高处流
    for (let i = 0; i < rowLen; i++) {
        dfs(dpPo, i, 0);
        dfs(dpAo, i, colLen - 1);
    }
    return res;
};
