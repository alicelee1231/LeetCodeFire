/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
   if(str1 + str2 !== str2 + str1) return ""

   function W(a,b){
    if(a % b === 0) return b
    return W(b, a % b)
   }

   const a = W(str1.length, str2.length)
   return str1.slice(0, a)
};