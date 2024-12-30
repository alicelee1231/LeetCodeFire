/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort(function(a, b){
            return b - a   
        }
    )
    let a = 0
    let x = new Set(nums)
    if(x.size >= 3){
        a = Array.from(x)[2]
    }else{
        a = Math.max(...x)

    }
        return a
};