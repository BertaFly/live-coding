var merge = function(nums1, m, nums2, n) {
    if (n !== 0) {
        let i = 0;
        let k = 0;
        while (i <= nums1.length) {
            if (nums1[i] >= nums2[k]) {
                nums1.splice(i, 0, nums2[k]);
                k++;
            } else if (nums1[i] === 0){
                if (k < n) {
                    nums1.splice(i, 1, nums2[k]);
                    k++;
                } else {
                    nums1.splice(i, 1);
                }
            }
            i++;
        }
    }
};

// console.log(merge([0], 0, [1], 1)); // [1]
// console.log(merge([1], 1, [], 0)); // [1]
// console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3)); //[1,2,2,3,5,6]
// console.log(merge([2,0], 1, [1], 1)); // [1,2]
console.log(merge([4,5,6,0,0,0], 3, [1,2,3], 3)); // [1,2,3,4,5,6] - didn't work out

// check current number in arr1
// compare with number on same pos in arr2
// if arr1 num is smaller, move to next num in arr1
// if arr2 num is smaller, insert it into arr1 and move to next num in arr2
// drop 0