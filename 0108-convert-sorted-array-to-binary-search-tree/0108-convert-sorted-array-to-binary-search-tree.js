/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
   
    if(nums.length === 0) return null
    if(nums.length === 1) return new TreeNode(nums[0])
    
  
   const mi= Math.floor(nums.length / 2)
    const root = new TreeNode(nums[mi])       
   root.left = sortedArrayToBST(nums.slice(0, mi))
    root.right = sortedArrayToBST(nums.slice(mi + 1, nums.length))
    
    return root
}