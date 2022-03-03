/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 下一个排列
 * 1 找到一个顺序对 (i, i+1) 满足nums[i] < nums[i+1] 这样i + 1 ～ n - 1为降序
 * 2 在区间i + 1 ~ n -1 中找到一个元素j满足nums[i] < nums[j], nums[j]为较大数
 * 3 交换nums[i], nums[j], 然后重新排排序i + 1 ~ n - 1为升序
 *   如果没找到说明此时是最大的序列，直接进行3即可
 */
var nextPermutation = function(nums) {
    let n = nums.length;
    let i = n - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) i --;
    if (i >= 0) {
        // 找到j
        let j = n -1;
        while (j >= i + 1 && nums[j] <= nums[i]) j --;
        let temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
    }
    if (i === -1) {
        nums.reverse();
    } else {
        let arr = nums.slice(i + 1, n);
        arr.sort((a, b) => {
            if (a - b < 0) return -1;
            else return 1;
        });
        for (let k = i + 1; k < n; ++ k) {
            nums[k] = arr[k - i - 1];
        }
    }
};
let arr = [3, 2, 1];
nextPermutation(arr);
console.log(arr)
