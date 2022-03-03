/**
 * @param {number[]} arr
 * 实现一个查询数据结构 快速的查询区间内某个值出现的次数
 * 思路 实现一个map，key为值，value为该值在arr中的下标数组
 * 查询的时候，获取下标数组，然后二分查找位置即可
 */
let tag = new Map()
var RangeFreqQuery = function(arr) {
    arr.forEach((item, index) => {
        if (tag.has(item)) {
            // 取出下标数组
            let temp = tag.get(item);
            temp.push(index);
        } else {
            let temp = []
            temp.push(index);
            tag.set(item, temp);
        }
    })
};

/**
 * @param {number} left
 * @param {number} right
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function(left, right, value) {
    // 可能出现value不存在的情况
    if (!tag.has(value) )return 0;
    // 先找到具体的下标数组
    const indexArr = tag.get(value);
    let resL, resR;

    let n = indexArr.length
    // 二分查找 要么找到value 要么是大于value的最小的数
    const binadySearch = (l, r, value) => {
        while (l < r) {
            let mid = (l + r) / 2;
            if (indexArr[mid] <  value) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        return l
    }
    let t = binadySearch(0, n - 1, left);
    resL = indexArr[t] >= left ? t : -1;
    let temp = binadySearch(0, n - 1, right);
    resR = indexArr[temp] <= right ? temp : temp - 1
    if (resL !== -1) {
        return resR - resL + 1;
    } else {return 0}

};

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */
let obj = new RangeFreqQuery([8, 4, 2,5,4,5,8,6,2,3])
console.log(obj.query(4, 5, 1))
