/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
//   first, I need to check which number is missing. 
//   so, I will sorting the elements in order
    nums.sort()
    let x = 0
    if(nums.length > nums[nums.length - 1]){
        x = nums.length
    }

    for(let i = 0; i < nums.length; i++){
        if(nums.indexOf(i) === -1){
            x = i
        }
    }
    return x
};