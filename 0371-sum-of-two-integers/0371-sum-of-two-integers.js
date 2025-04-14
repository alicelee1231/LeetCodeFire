/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while(b !== 0){
        let x = (a & b) << 1
        a = a ^ b
        b = x 
    }
    return a
};