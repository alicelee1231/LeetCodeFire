/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    let pre = null
    let cur = null
   
    while(head){
        cur = head.next
        head.next = pre
        pre = head
        head = cur
    }
    return pre
    };