/**
 * @param {number} n
 * @return {boolean}
 * 快乐数
 * 如果n是个位数 判断其是不是1 或 7
 * 如果不是个位数，则判断处理后的n是不是快乐数
 */
var isHappy = function(n) {
    if (n < 10) return n === 1 || n === 7;
    else {
        let res = 0;
        while (n !== 0) {
            let t = n % 10;
            res += Math.pow(t, 2);
            n = Math.floor(n / 10);
        }
        return isHappy(res)
    }
};
console.log(isHappy(1111111))
