/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  
    const result = new Map()
    for(let i = 0; i < nums.length; i++){
        if(result.has(nums[i])){
            let value = result.get(nums[i])
            result.set(nums[i], value+1)
        }else{
            result.set(nums[i], 1)
        }
    } 
    for(x of result.values()) {
        if(x >= 2){
            return true
            }
        }
    return false
    }