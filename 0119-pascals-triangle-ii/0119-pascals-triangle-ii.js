/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let a = [1]
    
    for(let i = 1; i <= rowIndex; i++){
        for(let j = i - 1; j > 0; j--){
            a[j] = a[j] + a[j-1]
        }
        a.push(1)
    }
    return a
};