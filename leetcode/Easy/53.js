/**
 * @param {number[]} nums
 * @return {number}
 * 最大子数组和
 * 动态规划
 * 1 状态dp[i]代表以i结尾的最大子数组和
 * 2 状态转移 dp[i] = max(dp[i -1] + nums[i], nums[i])
 * 3 dp[0] = nums[0]
 * 4 1 ~ n -1
 * 5 答案 dp[1 ～ n-1]中最大的一个
 */
var maxSubArray = function(nums) {
    let pre = 0, res = nums[0];
    for (const item of nums) {
        pre = Math.max(pre + item, item);
        res = Math.max(res, pre);
    }
    return res
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
