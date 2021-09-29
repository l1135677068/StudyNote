// reduce方法对数组中的每个元素执行提供的callback函数，汇总结果返回
// 调用reduce函数，接受两个参数，一个是回调函数，一个是初始值； 回调函数接受四个参数（累加值， 当前值，当前索引，数组)
// 如果没有初始值，数组的第一个元素作为初始值，从第二个元素开始调用。
function acc(arr, callback, initval) {
    let res = initval === undefined ? arr[0] : initval;
    let i = initval === undefined ? 1 : 0;
    for (i; i < arr.length; ++ i) {
        res = callback(res, arr[i]);
    }
    return res;
}

sum = (a, b) => a + b;

var arr = [2, 2, 3, 4];
var res = acc(arr, sum, 0);
console.log(res) // 11

// 利用reduce找出数组中的最大值
var maxItem = arr.reduce(function (max, item) {
    return max > item ? max : item;
})
console.log(maxItem); // 4

// 利用reduce计算数组中每个元素出现的次数
let num = arr.reduce((pre, cur) => {
    if (cur in pre) {
        pre[cur] ++;
    } else {
        pre[cur] = 1;
    }
    return pre;
}, {})
console.log(num);

// 利用reduce去重
let unique = arr.reduce((pre, cur) => {
    if (!pre.includes(cur)) {
        return pre.concat(cur);
    } else {
        return pre;
    }
}, []);
console.log(unique)

// 多维数组转化成一维数组
let array = [[0, 1], 4, [1, [2, 3]]];
// 将多维数组转换为一维
const transMuitiArray = (arr) => {
    return arr.reduce((pre, cur) => pre.concat(Array.isArray(cur)? transMuitiArray(cur) : cur), []);
}
console.log(transMuitiArray(array));

