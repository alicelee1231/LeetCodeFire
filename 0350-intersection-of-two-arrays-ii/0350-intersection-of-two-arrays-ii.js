/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let a = new Map();
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    a.set(nums1[i], (a.get(nums1[i]) || 0) + 1);
  }

  for (let i = 0; i < nums2.length; i++) {
    if (a.has(nums2[i]) && a.get(nums2[i]) > 0) {
      result.push(nums2[i]);
      a.set(nums2[i], a.get(nums2[i]) - 1); 
    }
  }

  return result;
};
