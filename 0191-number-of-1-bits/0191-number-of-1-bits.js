/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {

// 2로나누고 그 나머지 값
let a = []
let result = 0
while(n !== 0){
    let x = n % 2
    a.push(x)
    n = Math.floor(n / 2)
}
    for(let i = 0;  i < a.length; i++){
        if(a[i] === 1){
            result++
        }
    }
    return result
};