/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
   
    let result = []
    let done = 0
    let a = n
    while(a > 0){
        result.push(Math.floor(a % 2))
        a = Math.floor(a / 2)
    }
    for(let i = 0; i<result.length; i++){
        done += result[i]
    }
    
    return done
};

