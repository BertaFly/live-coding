/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set = [...new Set(nums)];
    return set.length !== nums.length;
};