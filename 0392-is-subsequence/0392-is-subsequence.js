/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let result = 0
    let ar = 0
    for(let i = 0; i < t.length; i++){
        if(s[ar] === t[i]){
            result += 1
            ar++
        }
    }
    return result === s.length ? true : false
};