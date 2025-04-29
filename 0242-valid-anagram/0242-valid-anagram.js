/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const s1 = Array.from(s).sort().join('')
    const s2 = Array.from(t).sort().join('')
    return s1 === s2 ? true : false
};