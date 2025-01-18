/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
        let x = s.split('').sort().join('')
        let a = []
        let b = [...new Set(x)]
        for(let i = 0; i < b.length;i++){
            a.push(x.lastIndexOf(b[i]) - x.indexOf(b[i])+1)
        }

        let cnt = 0
        let odd = false
        for(let i = 0; i < a.length; i++){
            if(a.length === 1){
                return a[i]
            }
            if(a[i] % 2 === 0){
                cnt += a[i]
            }else {
                cnt += a[i] - 1
                odd = true
            }
        }
        if(odd){
                cnt +=1
            }
            return cnt

};