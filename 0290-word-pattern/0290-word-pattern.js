/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(p, s) {
    const a = new Map()
    const b = new Map()
    
    const words = s.split(' ')
    let i = 0
    
    for (const word of words){
        if(i === p.length){
            return false
        }
    
    const current = p[i]
    
    if(!a.has(current) && !b.has(word)){
        a.set(current, word)
        b.set(word, current)
        console.log(a)
     }else {
         if(a.get(current) !== word || b.get(word) !== current ){
             return false
             }
        }
        ++i
    }
    return i === p.length
};