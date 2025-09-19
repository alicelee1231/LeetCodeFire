/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let b = s.replace(/[^\w]|_/g, "").toLowerCase()
    let a = b.split("").reverse().join("")

    if(s.trim().length === 0){
        return true
    }else if(b === a){
        return true
    }
    return false
};