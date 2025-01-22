/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    let k = 0
    var n = nums.length
    nums.sort((a, b) => {
        return a - b;
    })
    for (let i = 0; i < n; i += 2)
       k += nums[i]
    return k
};