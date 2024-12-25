/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {

//  I need to check the same elements where in both array.
//  so I use filter method and compare to each other
//     and then get rid of duplicated factor, 
// I use Set structure and convert to array again for output.
    let a = [...nums1].filter(num => nums2.includes(num))
    let result = new Set(a)
    return [...result]
};