/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    // 翻转l ~ r内的字符
    let reverse = (l, r) => {
        while (l < r) {
            let temp = s[r]
            s[r] = s[l]
            s[l] = temp;
            l ++
            r --
        }
    }
    reverse(0, s.length - 1)
    reverse(0, n - 1)
    reverse(n, s.length - 1)
    return s
};
console.log(reverseLeftWords("abcdefg", 2))
