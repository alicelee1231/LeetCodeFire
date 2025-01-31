/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let a =  ['Gold Medal','Silver Medal',"Bronze Medal"]
    let b = new Map()
    let result = []
    let x = score.slice()
    x.sort(function(a,b) {
        return b - a
    })
    for(let i = 0; i < score.length; i++){
            b.set(x[i], a[i] !== undefined ? a[i] : (i+1).toString())
    }
    for(let i = 0 ;  i< x.length; i++){
        result.push(b.get(score[i]))
    }
    return result
};