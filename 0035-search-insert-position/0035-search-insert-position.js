/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.lenght === 0) return 0
    nums.push(target)
    const a = nums.sort(function(a,b){
        return a - b
    })
    console.log(a)
    return a.indexOf(target) 
};