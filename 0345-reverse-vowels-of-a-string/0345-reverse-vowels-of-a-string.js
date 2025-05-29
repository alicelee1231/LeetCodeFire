/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let a  = []
    let y = ['a','A','e','E','i','I','o','O','u','U']
    let b = s.split('')
    for(let i = s.length - 1; i >= 0; i--){
        if(y.indexOf(s[i]) !== -1){
            a.push(s[i])
            b[i] = '*'
        }else if(y.indexOf(s[i]) === -1){
            b[i] = s[i]
        }
    }
                console.log(b)

    let x = 0
    for(let i = 0; i < b.length; i++){
        if(b[i] === '*'){
            b[i] = a[x]
            x++
        }
    }
    return b.join('')
};