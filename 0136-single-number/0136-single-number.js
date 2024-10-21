/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const a = new Map()
    for(let n of nums){
            if(!a.has(n)){
                a.set(n, 1)
            }else{
                let s = a.get(n)
                a.set(n, s + 1)
            }
        }
    for(let [key, val] of a.entries()){
        if(val === 1){
            return key
        }
    }
};