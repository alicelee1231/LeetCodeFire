/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const reverseS = s.trim().split(' ').reverse()
    let a = ''

    for(let i = 0; i < reverseS.length; i++){
        if(reverseS[i].length === 0 ){
            continue
        }else {
            a += reverseS[i] + " "
        }
    }
    return a.slice(0, -1)
    
};