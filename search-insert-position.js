/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const length = nums.length;
    if (length === 1) {
        return target <= nums[0] ? 0 : 1;
    }
    let start = 0;
    let middle = Math.floor(length / 2);
    let end = length - 1;
    while (target !== nums[middle]) {
        if (target > nums[middle]) {
            start = middle;
        } else if (target < nums[middle]) {
            end = middle;
        }
        middle = Math.floor((start + end) / 2);
        if (start === end || end - start === 1) {
            if (target <= nums[start]) return start;
            if (target === nums[end] || (target > nums[start] && target < nums[end])) return end;
            if (target > nums[end]) return end + 1;
        }
    }
    return middle;
};

console.log(searchInsert([-1,3,5,6], 0));

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2
// 
// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

// [1], target = 2
// Output: 1

// [1001], target = 5;
// Output: 0

// [1,3,5], target = 5
// Output: 2

// [2,5], target = 1
// Output: 0

// [-1,3,5,6], target = 0;
// Output: 1