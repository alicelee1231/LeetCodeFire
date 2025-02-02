/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let a = new Map()
    let lng = Math.max(list1.length, list2.length)
    for(let i = 0; i < lng; i++){
        if(list1.includes(list2[i])){
           let inds = list1.indexOf(list2[i]) + i
           a.set(list2[i], inds)
        }
    }
      let minIn = Math.min(...a.values())
       return [...a.entries()].filter(([key,value]) => value === minIn).map(([key]) => key)


};