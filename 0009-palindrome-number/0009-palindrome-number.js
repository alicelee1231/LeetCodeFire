/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0) return false

    const a = Number(String(x).split('').reverse().join(''))
    return x === a ? true : false

};