/**
 * @param {string} s
 * @return {string}
 * 最大回文子串
 */

// 动态规划 一个回文字符串(长度大于2)去除左右字符仍热是一个回文字符串
    // i === j dp[i][j] = true
    // i === j - 1 dp[i][j] = s[j] === s[i]
    // dp[i][j] = dp[i+1][j - 1] && s[i] === s[j]
let longestPalindrome = function(s) {
    let n = s.length;
    let tag = []
    for (let i = 0; i < n; ++ i) {
        tag[i] = [];
        for (let j = 0; j < n; ++ j) {
            tag[i][j] = false
        }
    }
    // 长度为1 为true 2的时候tag[i][j] = s[i] === s[j] >2的时候 tag[i][j] = (tag[i + 1][j - 1] && s[i] === s[j])
    let l = 0, r = 0, res = 0;
    for (let i = n - 1; i >= 0; -- i) {
        for (let j = i; j < n; ++ j) {
            if (i === j) tag[i][j] = true
            else if (j === i + 1) tag[i][j] = (s[j] === s[i]);
            else tag[i][j] = (tag[i + 1][j - 1] && (s[i] === s[j]));
            if (tag[i][j] && j - i + 1 > res) {
                l = i;
                r = j;
                res = j - i + 1;
            }
        }
    }
    return s.substring(l, r + 1);
};


