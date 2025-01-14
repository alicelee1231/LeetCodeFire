/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    // first, I need to check
    let a = "aeiouAEIOU"
    let c = []
    let d = s.split('')

    for(let i = 0; i < s.length + 1; i++){
        if(a.includes(s[s.length - i])){
            c.push(s[s.length - i])
        }
    }
    let z = 0
    for(let i = 0; i < s.length; i++){
        if(a.includes(s[i])){
            d[i] = c[z]
            z++
        }
    }
           return d.join('')

};

