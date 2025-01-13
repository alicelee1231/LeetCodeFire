/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    //for checking palindrome, I need to check the count 
    // so I will use Map, count elements.

    let a = new Map()
    for(let i = 0; i<s.length;i++){
        if(a.has(s[i])){
            a.set(s[i], a.get(s[i]) + 1)
        }else{
            a.set(s[i], 1)
        }
    }

// and for checking odd, I will use % 2 
//if there is odd, I will plus cnt
// so If cnt is bigger than 1, It means that it is not palindrome.
    let cnt = 0
    for(let value of a.values()){
        if(value % 2 !== 0){
            cnt++
        }
    }
    return cnt <= 1
};
