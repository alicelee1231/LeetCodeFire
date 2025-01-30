/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase()
    let a = s.split(" ").join('')
    let x = a.replace(/[^a-zA-Z0-9 ]/g, "")
    console.log(x)
    if(x.length === 0 || x.length === 1) return true
    let y = 1
    for(let i = 0; i < Math.floor(x.length / 2); i++){
        if(x[i] != x[x.length - y]){
            return false
        }else if(x[i] === x[x.length - y]){
            y++
            continue
        }
    }
    return true
};