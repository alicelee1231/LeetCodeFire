/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
   const a = new Set(nums)
   let result = []

   for(let i = 1; i < nums.length + 1; i++){
    if(!a.has(i)){
        result.push(i)
    }
   }
   return result
};