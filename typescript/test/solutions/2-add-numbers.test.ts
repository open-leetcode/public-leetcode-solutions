import { assert } from 'chai';
import addNumbers, { ListNode } from '../../src/solutions/2-add-numbers';


describe('2-add-numbers', () => {
    it('running your test...', () => {
        const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
        const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

        const result = addNumbers(l1, l2);
        console.info(`Result: ${JSON.stringify(result)}`);
        assert.deepEqual(result, new ListNode(7, new ListNode(0, new ListNode(8))));
    });
});