import { assert } from 'chai';
import reverseInteger from '../../src/solutions/7-reverse-integer';


describe('7-reverse-integer', () => {
    it('running your test...', () => {
        const x = 123;
        const result = reverseInteger(x);
        console.info(`Result: ${result}`);
        assert.equal(result, 321);
    });
});