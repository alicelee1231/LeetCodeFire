/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    //  let a = new Map()
    //     for(let i = 0; i < s.length; i++){
    //         if(a.has(s[i])){
    //             a.set(s[i],a.get(s[i]) + 1)
    //         }else a.set(s[i],1)
    //     }
    //     let cnt = 0
    //     let b = [...new Set(s)]
    //     for(let i = 0;  i < b.length; i++){
    //         if(a.get(b[i]) % 2 === 0){
    //             cnt += a.get(b[i])
    //         }
    //         }
    //         for(let i = 0; i < b.length; i++ ){
    //             if(a.get(b[i]) === 1){
    //                 cnt +=1
    //                 break
    //             }
    //         }
            
        
    //     return cnt
    let x = s.split('').sort().join('');
let a = [];
let b = [...new Set(x)];

for (let i = 0; i < b.length; i++) {
    a.push(x.lastIndexOf(b[i]) - x.indexOf(b[i]) + 1);
}

let cnt = 0;
let hasOdd = false;

for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
        cnt += a[i]; 
    } else {
        cnt += a[i] - 1; 
        hasOdd = true;}
}

if (hasOdd) {
    cnt += 1; 
}

return cnt;

};