/**
 * @param {string} s
 * @return {number}
 * 无重复字符的最长子串
 */
// 滑动窗口
    // 要想清楚 左端点和右端点分别滑动的时候需要处理什么信息
let lengthOfLongestSubstring = function(s) {
    let tag = new Set();
    // 滑动窗口
    let r = -1, n = s.length, res = 0;
    for (let i = 0; i < n; ++ i) {
        // 删除前一个字符
        if (i !== 0) tag.delete(s[i - 1]);
        while (r + 1 < n && !tag.has(s[r + 1])) {
            tag.add(s[r + 1]);
            r ++;
        }
        res = Math.max(res, r - i + 1);
    }
    return res;
};

