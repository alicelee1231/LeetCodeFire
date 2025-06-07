/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a, b) => a - b); 

    const n = nums.length;

    const case1 = nums[0] * nums[1] * nums[n - 1];
    const case2 = nums[n - 1] * nums[n - 2] * nums[n - 3];

    return Math.max(case1, case2);
};
