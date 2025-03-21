/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const a = []
    const cntLng = Math.max(word1.length, word2.length)
    for(let i = 0;  i < cntLng; i++){
        a.push(word1[i])
        a.push(word2[i])
    }
    let result = ''
   for(let i = 0;  i < a.length; i++){
        if(typeof a[i] === 'string'){
            result += a[i]
        }else continue
   }
   return result 
};