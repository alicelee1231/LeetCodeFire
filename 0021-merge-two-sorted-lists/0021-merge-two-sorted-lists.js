/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(li1, li2) {
    const newArr = {}
    if(!li1 || !li2) return li1 || li2
    if(li1.val < li2.val){
        li1.next = mergeTwoLists(li1.next, li2)
        return li1
    }
    li2.next = mergeTwoLists(li1, li2.next)
    return li2
};