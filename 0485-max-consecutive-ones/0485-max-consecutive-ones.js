/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
     let a = []
    let cnt = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            cnt++
        }else cnt=0
        a.push(cnt)
    }
     return Math.max(...a)
};