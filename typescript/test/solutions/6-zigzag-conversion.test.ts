import { assert } from 'chai';
import convert from '../../src/solutions/6-zigzag-conversion';


describe('6-zigzag-conversion', () => {
    it('running your test...', () => {
        const s = 'PAYPALISHIRING';
        const numRows = 3;

        const result = convert(s, numRows);
        console.info(`Result: ${result}`);
        assert.equal(result, 'PAHNAPLSIIGYIR');
    });
});