/**
 * @param {number[]} prices
 * @return {number}
 * 动态规划
 * 1 状态
 *      1 当天买入当天卖出 利润为0
 *      2 第一次买入    buy1
 *      3 第一次交易完成 sell1
 *      4 第二次买入 buy2
 *      5 第二次交易完成 sell2
 * 2 第一种状态利润为0，因此只用考虑2 3 4 5 四种状态，buy1等等分别代表最大利润
 *   状态转移 buy1 = max(buy1', -prices[i]) sell1 = max(sell1', buy1 + prices[i])
 *          buy2 = max(buy2' sell1 - prices[i]) sell2 = max(sell2', buy2 + prices[i])
 *          带 '的代表前一天的状态
 * 3 初始值 第一天的时候 buy1 = buy2 = -prices[0] sell1 = 0 sell2 = 0
 * 4 遍历顺序 1 ~ n-1
 */
var maxProfit = function(prices) {
    let buy1 = buy2 = -prices[0]
    let sell1  = sell2  = 0
    for (let i = 1; i < prices.length; ++ i) {
        // 此时括号中的buy1代表前一天的值 sell1同理
        buy1 = Math.max(buy1, -prices[i])
        sell1 = Math.max(sell1, buy1 + prices[i])
        buy2 = Math.max(buy2, sell1 - prices[i])
        sell2 = Math.max(sell2, buy2 + prices[i])
    }
    return sell2
};
console.log(maxProfit([3,3,5,0,0,3,1,4]))
