/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let a = s.split('')
    let j = 1;
    let x = 0
    for(let i = 0; i < a.length; i++){
        a[i] = a[i].charCodeAt()            
        }
        
    for(let i = 0; i < a.length -1; i++){
        x += Math.abs(a[i] - a[i+1])
    }

    return x
    }
    
    