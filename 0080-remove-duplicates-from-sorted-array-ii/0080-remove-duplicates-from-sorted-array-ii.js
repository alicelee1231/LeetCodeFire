/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let a = new Map()
    let idx = 0
    for(let i = 0; i< nums.length ; i++){
        if(!a.has(nums[i])){
            a.set(nums[i], 1)
        }else{
            a.set(nums[i], a.get(nums[i]) + 1)
        }
    }

       for(let [key,value] of a.entries()){
           let cnt = Math.min(value, 2)
           for(let i = 0; i < cnt; i++){
                nums[idx] = key
               idx++
           }
       }
        return idx
};

