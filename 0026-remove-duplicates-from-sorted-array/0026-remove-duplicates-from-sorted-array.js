/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length === 0 ) return 0

    let a = 0
    for(let i = 1 ;  i < nums.length; i++){
        if(nums[a] !== nums[i]){
            a++
            nums[a] = nums[i]
        }
   }
    return a + 1
};