/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const sp = s.split(" ")
    let min = 1
    for(let i = sp.length - 1; i >= 0; i--){
      if(sp[sp.length -min].length === 0){
          min++
      }else {
          sp[sp.length - min].length
      }
    }
        return sp[sp.length - min].length
};