/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const result = new Map()
    const a = []
    for(let i = 0; i< nums.length; i++){
        if(result.has(nums[i])){
            let value = result.get(nums[i])
            result.set(nums[i], value + 1)
        }else {
            result.set(nums[i], 1)
        }
        
    }
    for(x of result.keys()){
            if(result.get(x) >= 2 ){
                a.push(x)
            }
        }
    return a
};