/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let a = new Map()
    for(let i = 0; i < s.length; i++){
        if(a.has(s[i])){
            a.set(s[i], a.get(s[i])+1)
        }else{
            a.set(s[i], 1)
        }
    }
    let result = 0
    for(let i = 0; i< s.length; i++){
        if(a.get(s[i]) === 1){
            result =  s.indexOf(s[i])
            break
        }else result = -1
    }

    return result

};