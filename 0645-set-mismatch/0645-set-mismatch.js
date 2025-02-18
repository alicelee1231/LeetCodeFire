/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let n = nums.length
    let dup
    let missing
    let x = new Array( n + 1).fill(false)
    for(let num of nums){
        if(x[num]){
            dup = num
        }
        x[num] = true
    }

    console.log(x)
    for(let i = 1; i <= n; i++){
        if(!x[i]){
            missing = i
            break
        }
    }
    return [dup, missing]
};


//가장 큰값이 길이랑 같으면 -
// 가장 큰값이 길이보다 작으면 + 