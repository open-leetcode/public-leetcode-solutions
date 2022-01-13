import { assert } from 'chai';
import twoSum from '../../src/solutions/1-two-sum';


describe('1-two-sum', () => {
    it('running your test...', () => {
        const nums = [2, 7, 11, 15];
        const target = 9;

        const result = twoSum(nums, target);
        console.info(`Result: ${JSON.stringify(result)}`);
        assert.deepEqual(result, [0, 1]);
    });
});