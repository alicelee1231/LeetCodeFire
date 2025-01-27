/**
 * @param {number[]} candyType
 * @return {number} 
 */
var distributeCandies = function(candyType) {
    let a = new Set(candyType)
    if(a.size > candyType.length / 2){
        return candyType.length /2
    }else return a.size
};


//최대 2개를 먹을 순 있지만 타입은 1개
//3개의 타입을 먹을 순 있지만 최대 2개만 먹을 수 있음
// type > n / 2 -> n/2
// type < n / 2 -> type