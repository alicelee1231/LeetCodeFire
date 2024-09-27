/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let a = []
    let s = BigInt(digits.join('')) + 1n
    let result = s.toString()
    for(let i = 0; i < result.length; i++){
        a.push(Number(result[i]))
    }
    return a
};