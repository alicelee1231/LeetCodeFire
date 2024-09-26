/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    const original = [...strs]
    for(let i = 0; i < strs.length; i++){
        strs[i] = strs[i].split('').sort().join('')
    }
    const map1 = new Map()
    for(let i = 0; i< strs.length;i++){
        if(map1.has(strs[i])){
            map1.get(strs[i]).push(i)
        }else{
            var tmp = []
            tmp.push(i)
            map1.set(strs[i],tmp)
        }
    }
        let arr = []
    map1.forEach((values, keys) => {
        let tmp2 = []
        for(let i = 0; i < values.length; i++){
            tmp2.push(original[values[i]])
        }
        arr.push(tmp2)
    })
    return arr
};