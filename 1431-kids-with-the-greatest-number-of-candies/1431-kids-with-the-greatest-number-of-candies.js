/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    //need
    let result = []
    let newA = []
    // summarize
    for(let i = 0;  i < candies.length; i++){
        newA.push(candies[i] + extraCandies)
    }

    candies.sort(function(a, b){return b - a})
    console.log(candies)
    console.log(newA)
    //compare
    for(let i = 0;  i < newA.length; i++){
        if(candies[0] <= newA[i]){
            result.push(true)
        }else {
            result.push(false)
        }
    }

    return result
};