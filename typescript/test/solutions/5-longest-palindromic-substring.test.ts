import { assert } from 'chai';
import longestPalindrome from '../../src/solutions/5-longest-palindromic-substring';


describe('5-longest-palindromic-substring', () => {
    it('running your test...', () => {
        const s = 'babad';

        const result = longestPalindrome(s);
        console.info(`Result: ${result}`);
        assert.isTrue(result === 'bab' || result === 'aba');
    });
});