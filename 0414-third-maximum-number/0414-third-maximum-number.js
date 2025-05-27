/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {

const a = new Set([...nums])
   const b = Array.from(a)
   const x = b.sort(function(a,b){
    return b - a
   })
   console.log(x)
  if(x.length < 3){
    return x[0]
  }
   return x[2]
};