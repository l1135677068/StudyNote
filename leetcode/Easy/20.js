/**
 * 有效的括号
 * @param {string} s
 * @return {boolean}
 * 思路 遍历字符串，如果是左括号入栈，如果是右括号，判断栈顶是不是对应的左括号
 *                                          是出栈；否返回false
 */

var isValid = function(s) {
    let st = []
    const tag = {
        "}": "{",
        "]": "[",
        ")": "("
    }
    for (let item of s) {
        // 判断是不是右括号
        if (item in tag) {
            // 判断栈顶是不是对应的左括号
            if (st.pop() !== tag[item]) return false
        } else {
            st.push(item);
        }
    }

    return st.length <= 0
};
console.log(isValid("([)]"))
