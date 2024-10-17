/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
   
const a = n.toString(2).padStart(32,'0')
const b = a.split('').reverse().join('')
const result = parseInt(b,2)

    return result
};
