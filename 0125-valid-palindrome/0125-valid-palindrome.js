/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let b = []
    let a = s.toLowerCase()
    for(let i = 0; i< s.length; i++){
        if(a[i].charCodeAt(0) >= 97 && a[i].charCodeAt(0) <= 122){
            b.push(a[i])
        }else if( a[i].charCodeAt(0) >= 48 && a[i].charCodeAt(0) <= 57) {
            b.push(a[i])
        }
    }
    console.log(b)
    for(let i = 0 ; i< b.length; i++){
        if(b[i] !== b[b.length - 1 -i]){
            return false
        }else if(b[i] === b[b.length - 1 -i]){
            continue
        }
        }
        return true
    };