/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const a = BigInt(digits.join('')) + 1n
    const b = a + ''
    const result = []
    for(let i = 0; i < b.length; i++){
        result.push(Number(b[i]))
    }
    return result
};