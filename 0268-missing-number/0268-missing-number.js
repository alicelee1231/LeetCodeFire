/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length 
    let realSum = n * (n + 1 ) / 2
    for(let i=0; i < nums.length; i++){
        realSum = realSum - nums[i]
    }  
    return realSum
};