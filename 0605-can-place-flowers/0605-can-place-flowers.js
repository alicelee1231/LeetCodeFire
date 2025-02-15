/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(f, n) {
    let x = 0

    for(let i = 0; i < f.length; i++){
        if(f[i] === 0 && 
        (i === 0 || f[i - 1] === 0) &&
        (i === f.length - 1 || f[i+1] === 0)) {
            f[i] = 1
            x++
            i++
        }
        if(x >= n) return true
    }
        return false
}