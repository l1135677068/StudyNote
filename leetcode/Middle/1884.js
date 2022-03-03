/**
 * @param {number} n
 * @return {number}
 * 动态规划 当从第i层丢鸡蛋的时候，有两种情况 一种是碎了，那么接下来只能尝试1 ~ i - 1层, 共i - 1 + 1 = i次
 *                              第二种是没碎，问题转换为两个鸡蛋求解(n - i + 1 ~ n 层 = 0 ~ n - i = dp[n - i] + 1)的最小操作次数
 * 1 状态 dp[i] 代表第i层尝试的最小次数
 * 2 状态转移 dp[i] = min(temp, max(dp[i -j] + 1, i)) j = 1 ~ i, max是保证能找到
 * 3 初始值 dp[1] = 1 dp[0] = 1
 * 4 遍历顺序
 */
var twoEggDrop = function(n) {
    let dp = []
    dp.push(0);
    for (let i = 1; i <= n; ++ i) {
        let temp = Number.MAX_VALUE;
        for (let j = 1; j <= i; ++ j) {
            temp = Math.min(temp, Math.max(dp[i - j] + 1, j));
        }
        dp[i] = temp;
    }
    return dp[n];
};
console.log(twoEggDrop(0))
