/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    if (x < 10) return true;
    const nums = String(x).split('');
    let latsInd = nums.length - 1;
    for (let i = 0; i < Math.floor(nums.length / 2); i++) {
        if (nums[i] !== nums[latsInd]) return false;
        latsInd -= 1;
    }
    return true;
};