/**
 * 花括号展开
 */
let a = "{a,b}c{d,e}f";
let res = [], chs = [];
let dfs = (idx, ans) => {
    if (idx === chs.length) {
        res.push(ans.concat());
        return
    }
    for (const item of chs[idx]) {
        ans.push(item);
        dfs(idx + 1, ans);
        ans.pop();
    }
}
let expand = (str) => {
    // 处理字符串 让其成为[a, b] [c] [d e] [f]
    for (let i = 0; i <str.length; ++ i) {
        if (str[i] === ",") continue
        let temp = []
        if (str[i] === "{") {
            while (str[++i] !== "}") {
                if (str[i] !== ",") {
                    temp.push(str[i])
                }
            }
        } else {
            temp.push(str[i])
        }
        chs.push(temp);
    }
    dfs(0, []);
}

expand("{a,b}c{d,e}f")
console.log(res)
