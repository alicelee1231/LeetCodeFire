/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let a = []
    
    function preorder(root){
        if(!root) return
        a.push(root.val)
        preorder(root.left)
        preorder(root.right)
    }
    
    preorder(root)
    return a
};