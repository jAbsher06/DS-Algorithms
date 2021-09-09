/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let speedy = head;
    let tortoise = head;
    
    for(let i = 0; i < n; i++) {
        speedy = speedy.next;
    }
    if(!speedy) {
        return head.next;
    }
    while(speedy.next){
        speedy = speedy.next;
        tortoise = tortoise.next;
    }
    tortoise.next = tortoise.next.next;
    return head;
};