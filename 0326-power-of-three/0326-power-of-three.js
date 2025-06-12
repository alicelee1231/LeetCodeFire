/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n <= 0) return false
    while(n % 3 === 0 ){
        n = Math.floor(n / 3)
    }
    return n === 0 ? true : n === 1 ? true : false
};