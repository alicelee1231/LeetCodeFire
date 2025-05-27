/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let a = []
    let x= 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] != 0){
            x++
        }else{
            x = 0
        }
        a.push(x)
    }
    return Math.max(...a)
};