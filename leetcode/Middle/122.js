/**
 * @param {number[]} prices
 * @return {number}
 * 买卖股票||
 * 动态规划
 * 1 每天结束的时候有两种状态，所以dp[i][0] 代表第i天结束的时候手里没有股票的最大利润 dp[i][1]代表第i天结束的时候手里有股票的最大利润
 * 2 状态转移方程 dp[i][0] = max(dp[i-1][1] + prices[i], dp[i - 1][0]) // 前一天也没有股票 或者前一天有股票 今天抛售
 *              dp[i][1] = max(dp[i - 1][0] - prices[i], dp[i - 1][1]) // 前一天没买股票 今天买了 或者前一天已经有股票了
 * 3 初始值 dp[0][0] = 0 dp[0][1] = -prices[0]
 * 4 遍历顺序 0~n
 */
var maxProfit = function(prices) {
    let n = prices.length;

    let dp = []
    for (let i = 0; i < n; ++ i) {
        dp[i] = []
        for (let j = 0; j < 2; ++ j) {
            dp[i][j] = 0
        }
    }
    // 初始值
    dp[0][1] = -prices[0]
    let res = 0
    for (let i = 1; i < n; ++ i) {
        dp[i][0] = Math.max(dp[i - 1][1] + prices[i], dp[i - 1][0])
        dp[i][1] = Math.max(dp[i - 1][0] - prices[i], dp[i - 1][1])
        res = Math.max(res, Math.max(dp[i][0], dp[i][1]))
    }
    return res
};
console.log(maxProfit([1]))
