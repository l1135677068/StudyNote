
const verify = (str) => {
    if (str.includes("e")) return false
    if (str.length > 3 || str.length < 1) {
        return false
    } else {
        if (str.length > 1 && str[0] === "0") return false;
        else if (str - '0' >= 0 && str - '0' <= 255) return true;
        else return false;
    }
}

const verify4 = (Ip) => {
    // 依次验证每个.中的数据是否符合
    let ipArr = Ip.split(".")
    if (ipArr.length !== 4) return "Neither"
    let flag = true
    ipArr.forEach(item => {
        if (flag) {
            flag = verify(item);
        }
    })
    if (flag) {
        return "Ipv4"
    } else return "Neither"
}
const verify66 = (str) => {
        if (str.length > 4 || str.length < 1) return false;
    const type = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F"]

    let flag = true
    for (let i = 0; i < str.length; ++ i) {
        if (type.indexOf(str[i]) === -1) {
            flag = false;
        }
    }
    return flag;
}
const verity6 = (Ip) => {
    let ipArr = Ip.split(":")
    if (ipArr.length !== 8) return "Neither";
    let flag = true;
    ipArr.forEach(item => {
        if (flag) {
            flag = verify66(item)
        }
    })
    if (flag) {
        return "Ipv6"
    } else return "Neither"
}

/**
 * @param {string} queryIP
 * @return {string}
 * 验证IP地址
 */
let validIPAddress = function(queryIP) {
    let res = "Neither"
    if (queryIP.includes(".")) {
        res = verify4(queryIP)
    } else if (queryIP.includes(":")) {
        res = verity6(queryIP)
    }
    return res
};

console.log(validIPAddress("20EE:Fb8:85a3:0:0:8A2E:0370:7334:12"))
