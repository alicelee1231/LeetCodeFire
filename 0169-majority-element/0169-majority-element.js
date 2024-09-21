/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
        let obj = {};
        nums.forEach(num => {
            if(!obj[num]){
               obj[num] = 1
            } else
                obj[num]++
        })
       const maxCnt = Math.max(...Object.values(obj));
        for(let num in obj){
            if(obj[num] === maxCnt){
                return Number(num)
            }
        }
};