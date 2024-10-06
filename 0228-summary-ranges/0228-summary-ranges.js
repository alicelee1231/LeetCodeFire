/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
   
    let re = []
    let i = 0
    while( i < nums.length){
        let start = nums[i]
        console.log(start)
        while(nums[i+1] === nums[i] + 1){
            i+=1
        }
        let end = nums[i]
        re.push(start === end ? `${start}` : `${start}->${end}`)
        i+=1
        }
    
    return re
    
};