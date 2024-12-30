/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
//     i need to find the third distinct maximum number.
//     key point : distinct, third, maximum.
//     regarding to thses key points, I need to use sort, max for checking the number of third maximum
    // and Set for getting rid of duplicated factor in array.
    nums.sort(function(a, b){
            return b - a   
        }
    )
    let a = 0
    let x = new Set(nums)
    if(x.size >= 3){
//         Set can't be approched via index. so I need to convert it into array
        a = Array.from(x)[2]
    }else{
        a = Math.max(...x)

    }
        return a
};