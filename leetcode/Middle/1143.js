/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 * 最长公共子序列
 * 动态规划
 * 1 状态dp[i][j]代表 a以i结尾，b以j结尾的最长公共子序列的长度
 * 2 状态转移 1 a[i] != a[j] dp[i][j] = max(dp[i][j - 1], dp[i - 1][j])
 *          2 a[i] = a[j] dp[i][j] = max(dp[i][j], dp[i - 1][j - 1] + 1)
 *          dp[i][j] = max(dp[i][j], `
 * 3 初始状态dp[0][j] = 0 dp[i][0] = 0
 * 4 遍历 1 - n 1 - m
 * 5 答案是dp[n][m]
 */
var longestCommonSubsequence = function(text1, text2) {
    let n = text1.length;
    let m = text2.length;
    let dp = [];
    for (let i = 0; i <= n; ++ i) {
        dp[i] = [];
        for (let j = 0; j <= m; ++ j) {
            dp[i][j] = 0
        }
    }

    for (let i = 1; i <= n; ++ i) {
        for (let j = 1; j <= m; ++ j) {
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + 1);
            }
        }
    }

    console.log(dp)
    return dp[n][m];
};
console.log(longestCommonSubsequence("abc", "abc"))
