/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let result = []
    if(!root) return result;
    
    const a = (node) => {
        if(!node) return;
        result.push(node.val)
        for(let child of node.children){
            a(child)
        }
    }
    a(root)
    return result
};