/**
 * @param {string} currentState
 * @return {string[]}
 */
var generatePossibleNextMoves = function(curSt) {
    if(curSt.length === 1 || !curSt.includes("++")) return []
    let result = []
    for(let i = 0; i < curSt.length - 1; i++){
        if(curSt[i] === '+' && curSt[i+1] === '+'){
           let a = curSt.slice(0,i) + '--' + curSt.slice(i+2)
           result.push(a)
        }

    }
    return result
};