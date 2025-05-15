/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const a = {
        'I' :1,
        'V' :5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
    }
    let result = 0
    for(let i = 0 ;  i< s.length ; i++){
        if(a[s[i]] === 1 && (a[s[i+1]] === 5 || a[s[i+1]] === 10)){
            result -= 1
        }else if (a[s[i]] === 10 && (a[s[i+1]] === 50 || a[s[i+1]] === 100)){
            result -= 10
        }else if(a[s[i]] === 100 && (a[s[i+1]] === 500 || a[s[i+1]] === 1000)){
            result -= 100
        }else {
            result += a[s[i]]
        }
        console.log(result)
    }
            return result

};