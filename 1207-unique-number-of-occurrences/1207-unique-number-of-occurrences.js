/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
     const a = new Map()
     for(let i = 0; i< arr.length; i++){
            if(a.has(arr[i])){
            a.set(arr[i], a.get(arr[i]) + 1);
            }else {
                a.set(arr[i],1)
            }
     }
    const seen = new Set();
    for (let value of a.values()) {
        if(seen.has(value)){
            return false
        } else{
            seen.add(value)
        }
    }
    return true
};