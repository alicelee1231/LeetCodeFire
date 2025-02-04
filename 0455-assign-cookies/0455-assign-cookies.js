/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let cnt = 0
    g.sort((a,b) => { return a - b })
    s.sort((a,b) => { return  a - b })
    let si = 0
    let gx = 0

    if(g.length === 0 || s.length === 0){
        return 0
    }

    while(si < s.length && gx < g.length){
        if(s[si] >= g[gx]){
            cnt++
            gx++
        }
        si++
    }

    return cnt
};