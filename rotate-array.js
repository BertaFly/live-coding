/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if (nums.length === 1) return;
    if (nums.length % k === 0) return;
    while(k > 0) {
        const tail = nums.pop();
        nums.unshift(tail);
        k--;
    }
console.log(nums); //
};

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]

// input [1,2]
// [2, 1]
console.log(rotate([1,2,3,4,5], 11)); //