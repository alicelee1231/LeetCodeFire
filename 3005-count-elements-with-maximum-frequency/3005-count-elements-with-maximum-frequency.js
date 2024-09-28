/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const a = new Map()
    const result = []
    let b = 1
    let c = 0
    for(let i = 0; i < nums.length; i++){
        if(!a.has(nums[i])){
            a.set(nums[i],b)  
        }else if(a.has(nums[i])){
                a.set(nums[i], a.get(nums[i]) + 1 )
            }
    } 
   a.forEach((v, k) => {
       result.push(v)
       result.sort((a,b)=>(b-a));
   })
    let ma = Math.max(...result)
    let fi = 0
    for(let i =0; i< result.length; i++){
        if(result[i] === ma){
           fi += result[i] 
        }
    }
    return fi

};