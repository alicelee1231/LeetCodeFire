/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapS = {}, mapT = {};

    for (let i = 0; i < s.length; i++) {
        if (mapS[s[i]] !== mapT[t[i]]) return false;
        mapS[s[i]] = i + 1;
        console.log(mapS[s[i]])
        mapT[t[i]] = i + 1;
    }
    
    return true;
};

