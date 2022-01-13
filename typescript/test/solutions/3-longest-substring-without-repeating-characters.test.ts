import { assert } from 'chai';
import longestSubstringWithoutRepeatingCharacters from '../../src/solutions/3-longest-substring-without-repeating-characters';


describe('3-longest-substring-without-repeating-characters', () => {
    it('running your test...', () => {
        const input = 'abcabcbb';
        const result = longestSubstringWithoutRepeatingCharacters(input);

        console.info(`Result: ${JSON.stringify(result)}`);
        assert.equal(result, 3);
    });
});