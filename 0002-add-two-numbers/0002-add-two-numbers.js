/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {

    let sumNode = new ListNode()
    
    const recursiveFunc = (_l1, _l2, _l3) => {
        // terminate if one of list node is empty(ends)
        if (!_l1 && !_l2) return
   
        const paramOne = _l1 ? _l1.val : 0
        const paramTwo = _l2 ? _l2.val : 0
        const paramThree = _l3.val
        const sum = paramOne + paramTwo + paramThree
        
        // set reamin value,         
        _l3.val = sum%10
        // set value when sum is equal or more than 10
        if (sum >= 10){
            _l3.next = new ListNode(1)
        } else if (_l1?.next || _l2?.next) {
            _l3.next = new ListNode()
        }
    
        recursiveFunc(_l1?.next, _l2?.next, _l3?.next)
    }

    recursiveFunc(l1, l2, sumNode)
    
    return sumNode

};