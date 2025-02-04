// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 1

    for(let j = 1;j < nums.length; j++){
        if (nums[j] !== nums[i-1]){
            nums[i] = nums[j];
            i++;
        }
    }
    return i
};