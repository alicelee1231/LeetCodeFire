/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
