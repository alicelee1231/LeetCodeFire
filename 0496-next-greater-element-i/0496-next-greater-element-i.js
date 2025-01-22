/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let result = []
  let a = 0
    for(let i = 0;  i < nums1.length; i++){
        let b = nums2.indexOf(nums1[i])
        let x = nums2.slice(b +  1)
        let found = false
        for(let j = 0; j < x.length; j++){
            if(x[j] > nums1[i] ){
                result.push(x[j])
                found = true
                break
            }
        }
       if(!found){
        result.push(-1)
       }
    }
    return result
};