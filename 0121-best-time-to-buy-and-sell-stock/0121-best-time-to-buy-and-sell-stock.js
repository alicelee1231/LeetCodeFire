/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let minP = prices[0]
   let maxP = 0

   for(let i = 1; i< prices.length; i++){
    const profit = prices[i] - minP
    maxP = Math.max(maxP, profit)
    minP = Math.min(minP, prices[i])
   }
return maxP
};