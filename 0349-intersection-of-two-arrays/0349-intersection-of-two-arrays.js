/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  
   // let x = new Set(nums1)
   // let y = new Set(nums2)
   //  let inter = new Set([...x].filter(num => y.has(num)))
   //  return [...inter]
    
    let a = [...nums1].filter(num => nums2.includes(num))
    let result = new Set(a)
    return [...result]
};