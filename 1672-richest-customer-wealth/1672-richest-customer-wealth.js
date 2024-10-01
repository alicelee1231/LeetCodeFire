/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    
    let a = []
    let ans = 0
    for(let i = 0; i< accounts.length; i++){
        let sum = 0
        for(let j = 0; j < accounts[i].length; j++){
            sum += accounts[i][j]
        }
        ans = Math.max(ans, sum)

    }
    return ans
};