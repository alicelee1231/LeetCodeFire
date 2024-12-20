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

//  actually, I just want to use for loop, and compare each other
//     like nums[i + 1] - nums[i] > 1 -> x = nums[i] + 1
// but I want to approach in other way. so I use indexOf method and search the element.
    for(let i = 0; i < nums.length; i++){
        if(nums.indexOf(i) === -1){
            x = i
        }
    }
    return x
};