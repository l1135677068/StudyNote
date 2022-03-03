/**
 * @param {number[]} prices
 * @return {number}
 * 买卖股票的最佳时机
 *  1 动态规划 dp[i] 代表第i天为末尾的价格最低点是多少 dp[i] =min(dp[i - 1], price[i]) dp[0] = price[0]
 *  2 优化 dp[i]只跟i - 1有关 用变量存储即可
 */
var maxProfit = function(prices) {
    let res = 0;
    let n = prices.length;
    let dp = [];
    dp.fill(0, 0, n);
    prices.forEach((item, index) => {
        if (index === 0) {
            dp[0] = item;
        } else {
            dp[index] = Math.min(dp[index - 1], item);
        }
        res = Math.max(res, item - dp[index]);
    })
    return res;
};

// 优化
var optimizeMaxProfit = (prices) => {
    let res = 0
    let pre = 10000000
    let now = 0;
    for (let i = 0; i < prices.length; ++ i) {
        if (i === 0) {
            now = prices[i]
        } else {
            now = Math.min(pre, prices[i])
        }
        pre = now
        res = Math.max(res, prices[i] - now);
    }
    return res
}
console.log(optimizeMaxProfit([7, 1,5,3,6,4]))
