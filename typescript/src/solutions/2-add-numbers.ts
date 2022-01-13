// Leetcode Question 2 - Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/
// Level: Medium
// Category: Linked List
// Time complexity: O(n) where n is the length of l1 and l2
// Memory complexity: O(n) where n is the length of l1 and l2

export class ListNode {
    val: number;
    next: ListNode;

    constructor(val?: number, next?: ListNode) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

const addTwoNumbers = (l1: ListNode, l2: ListNode): ListNode => {
    let result: ListNode = new ListNode(0);
    let current = result;
    let carry = 0;

    while (l1 || l2 || carry) {
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return result.next;
}

export default addTwoNumbers;