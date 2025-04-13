/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let a = new Map()
    for(let i = 0; i < nums.length; i++){
        if(a.has(nums[i])){
            return true
        }else{
            a.set(nums[i], 1)
        }
    }
    return false
};