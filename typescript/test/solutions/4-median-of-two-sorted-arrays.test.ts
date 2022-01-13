import { assert } from 'chai';
import findMedianSortedArrays from '../../src/solutions/4-median-of-two-sorted-arrays';


describe('4-median-of-two-sorted-arrays', () => {
    it('running your test...', () => {
        const nums1 = [1, 3];
        const nums2 = [2];

        const result = findMedianSortedArrays(nums1, nums2);
        console.info(`Result: ${result}`);
        assert.equal(result, 2);
    });
});