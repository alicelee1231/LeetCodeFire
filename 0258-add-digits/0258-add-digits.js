/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let y = num
    let x = String(y).split('').map(Number)
    if(x.length === 1) return x[0]
    while(x.length > 1){
        y = 0
        for(let i = 0;  i < x.length; i++ ){
            y += x[i]
        }
        x = String(y).split('').map(Number)
    }
    
    return y
};