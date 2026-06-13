/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (nums.length === 1) return nums[0];
    let candidate = undefined;
    let count = 0;
    nums.forEach(n => {
        if (count === 0) {
            candidate = n;
            count = 1;
        } else if (candidate === n) {
            count += 1;
        } else {
            count -= 1;
        }
    });
    return candidate;
};

// Input: nums = [3,2,3] // 3
// [2,2,1,1,1,2,2] // 2
// [1] // 1
// [3, 3, 4] // 3

console.log(majorityElement([3, 3, 4]));