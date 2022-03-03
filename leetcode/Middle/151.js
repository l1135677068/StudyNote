/**
 * @param {string} s
 * @return {string}
 * 翻转字符串里的单词
 * 1 先清除字符串左右两端的空格
 * 2 从后往前遍历字符串，如果当前的字符是空格，找到连续空格中的第一个空格，加入答案，
 *             否则双指针记录单词的第一个位置和找到单词的最后一个位置，然后从后往前遍历加入答案
 *
 */
var reverseWords = function(s) {
    s = s.trim();
    let res = "";
    let n = s.length
    for (let i = n - 1; i >= 0; -- i) {
        if (s[i] === " ") {
            // 找到最后一个空格
            while (i - 1 >= 0 && s[i - 1] === " ") i--;
            res += s[i];
        } else {
            // 找到单词的首尾
            let j = i;
            while(j - 1 >= 0 && s[j - 1] !== " ") {
                j --;
            }

            // 记录单词头部的位置
            let temp = j;
            let str = ""
            while (j <= i) {
                str += s[j];
                j ++;
            }
            i = temp;
            res += str;
        }
    }
    return res;
};

// 第二种做法 api
const reverseWords2 = (s) => {
    return s.trim().split(" ").reverse().join(" ")
}
console.log(reverseWords2("hello world"))
