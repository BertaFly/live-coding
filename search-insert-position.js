/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const findIndexInNums = (nums, target, start, end) => {
    let i = start;
    while (i <= end) {
        if (nums[i] >= target) return i;
        i++;
    }
}

var searchInsert = function(nums, target) {
    const length = nums.length;
    let start = 0;
    let middle = Math.floor(length / 2);
    let end = length - 1;
    console.log('args', nums, target);
    while (target !== nums[middle]) {
        console.log('start', start, 'middle', middle, 'end', end);
        if (target > nums[middle]) {
            start = middle;
        } else if (target < nums[middle]) {
            end = middle;
        }
        middle = Math.floor((start + end) / 2);
        if (start === end) return middle;
        if (end - start === 1) {
            if (target > nums[start] && target < nums[end]) return end;
            if (target > nums[end]) return end + 1;
        }
    }
    return middle;
};

console.log(searchInsert([1,3,5,6], 5));

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
