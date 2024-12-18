/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let b = new Map()
    let x = []
    for(let i = 0; i< nums.length; i++){
       if(b.has(nums[i])){
           b.set(nums[i],b.get(nums[i]) + 1)
       }else{
           b.set(nums[i],1)
       }
    }
    let answer = [...b.entries()]
    .sort((a, b) => b[1] - a[1])
    .map((num) => num[0]);

    let result = answer.slice(0, k )
    return result
    };

