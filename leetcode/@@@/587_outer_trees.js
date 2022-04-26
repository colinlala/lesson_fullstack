/*
 * @Author: ZYH
 * @Email: 1522302196@qq.com
 * @GiteeId: colincclala
 * @Date: 2022-04-26 10:12:17
 * @LastEditTime: 2022-04-26 10:28:06
 * @Description: 安装栅栏 凸包问题 absin(aa-bb)=ab(sinaacosbb-sinbbcosaa)=a(X)b(Y)-b(X)a(Y)
 * 
 */
/**
 * @param {number[][]} trees
 * @return {number[][]}
 */
var outerTrees = function (trees) {
    const cross = function (x1, y1, x2, y2) {
        return x1 * y2 - x2 * y1;
    }
    const area = function (a, b, c) {
        return cross(b[0] - a[0], b[1] - a[1], c[0] - a[0], c[1] - a[1]);
    }
    trees.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    const n = trees.length;
    const hull = [];
    const used = new Array(n).fill(false);
    let top = 0;
    for (let i = 0; i < n; i++) {
        while (top >= 2 && area(trees[hull[top - 1]], trees[hull[top]], trees[i]) > 0) {
            used[hull[top--]] = false;
        }
        hull[++top] = i;
        used[i] = true;
    }
    used[0] = false;
    for (let i = n - 1; i >= 0; i--) {
        if (used[i]) continue;
        while (top >= 2 && area(trees[hull[top - 1]], trees[hull[top]], trees[i]) > 0) {
            top--;
        }
        hull[++top] = i;
    }
    top--;
    const res = [];
    for (let i = 1; i <= top; i++)res.push(trees[hull[i]]);
    return res;

};