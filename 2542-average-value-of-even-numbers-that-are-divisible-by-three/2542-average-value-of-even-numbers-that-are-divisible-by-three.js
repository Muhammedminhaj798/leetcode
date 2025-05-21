/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
   let filtered = nums.filter(num => num % 2 === 0 && num % 3 === 0);

    if (filtered.length === 0) return 0;

    let sum = filtered.reduce((acc, cur) => acc + cur, 0);
    
    return Math.floor(sum / filtered.length);
};