var removeDuplicates = function(nums) {
    let current = 0;
    let next = 1;
    while (next < nums.length) {
        if (nums[current] === nums[next]) {
            nums.splice(current, 1);
            console.log('after splice', nums);
        } else {
            current++;
            next++;
        }
    }
    return nums.length;
};

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

console.log(removeDuplicates([1,1,2]))