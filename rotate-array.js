/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

function isPowerOf(n, base) {
  const exp = Math.log(n) / Math.log(base);
  return Number.isInteger(Math.round(exp * 1e10) / 1e10); // round to dodge float errors
}

var rotate = function(nums, k) {
    if (nums.length === 1) return;
    if (k > 1 && isPowerOf(k, nums.length)) return;
    const modifiedK = k > nums.length ? k % nums.length : k;
    const tail = nums.splice(-modifiedK);
    nums.unshift(...tail);
};

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]

// input [1,2]
// [2, 1]
console.log(rotate([-1,-100,3,99], 2)); //
// i = 0;
// toMemo = nums[i];
// nums[i] = nums[k]
// nums[k] = toMemo;
// [3, -100, -1, 99]
// i++;
// k--;
