/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let result = 0
    let isNegative = x < 0
    x = Math.abs(x)
    const MAX = 2147483647;  
    const MIN = -2147483648;

    while(x > 0){
        let di = x % 10
        x = Math.floor(x / 10)
        if(result > Math.floor(MAX / 10) ||
            (result === Math.floor(MAX / 10) && di > 7)){
            return 0
        }
        result = result * 10 + di
    }
    return isNegative ? -result : result

};