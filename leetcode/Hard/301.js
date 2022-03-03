/**
 * 删除无效括号
 * @param {string} s
 * @return {string[]}
 * 主要思路 dfs回溯 + 剪枝
 * 1 先求出最少需要删除的括号数  遍历一遍得到
 * 2 再根据dfs 尝试每种情况是否符合条件，如果符合则加入到res中
 * 3 注意 不只有括号 还有字母,要充分判断
 */
let removeInvalidParentheses = function(s) {
    let res = [];
    const isValid = (str) => {
        let cnt = 0;
        for (let i = 0; i  <str.length; i ++) {
            if (str[i] === "(") {
                cnt ++
            } else if (str[i] === ")"){
                // 可能包含字母
                cnt --;
                if (cnt < 0) {
                    return false
                }
            }
        }
        return cnt === 0
    }
    // 递归删除某些括号 start代表从第几个开始枚举，其实是一种枚举顺序
    const dfs = (str, lnumber, rnumber, start) => {
        if (lnumber === 0 && rnumber === 0) {
            console.log(isValid(str))
            if (isValid(str)) {
                res.push(str)
            }
            return
        }

        for (let i = start; i < str.length; ++ i) {
            // 剪枝
            if (i !== start && str[i] === str[i - 1]) continue
            if (lnumber + rnumber > str.length - i) return
            // 删除左
            if (lnumber > 0 && str[i] === "(") {
                dfs(str.substr(0, i) + str.substr(i + 1), lnumber - 1, rnumber, i )
            } else if (rnumber > 0 && str[i] === ")") {
                dfs(str.substr(0, i) + str.substr(i + 1), lnumber, rnumber - 1, i )
            }
        }
    }

    // 求出最少需要删除的括号数
    let lnumber = 0, rnumber = 0;
    for (const item of s) {
        if (item === "(") {
            lnumber ++
        } else if(item === ")") {
            // 如果当前左扩号为0 rnumber ++否则 lnumber--
            if (lnumber === 0) rnumber ++
            else lnumber --
        }
    }
    dfs(s, lnumber, rnumber, 0)
    // 判断括号是不是合法 () a()()这样的也是合法的，因此只要遍历字符串，每次遇到右括号判断是否有对应的左括号即可
    return res;
};

