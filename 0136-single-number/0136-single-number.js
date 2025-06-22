/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if(nums.length === 1) return nums[0]
    const a = new Map()
    for(let i =0 ; i < nums.length; i++){
        if(a.has(nums[i])){
            a.set(nums[i],a.get(nums[i]) + 1)
        }else{
            a.set(nums[i],1)
        }
    }
    for(let i = 0; i < nums.length; i++){
        if(a.get(nums[i]) === 1){
            return nums[i]
        } 
    }
};