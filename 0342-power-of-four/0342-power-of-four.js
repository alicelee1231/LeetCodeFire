/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n === 1) return true
    let x = 4
    while(n !== x){
        if(x < n){
            x = x * 4
        }else return false
    }

    return true
};