// Leetcode Question 5 - Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/
// Level: Medium
// Category: String
// Time complexity: O(n^2) where n is the length of s
// Memory complexity: O(1)

const expand = (s: string, left: number, right: number): string => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.slice(left + 1, right);
}

const longestPalindrome = (s: string): string => {
    if (s.length === 0) {
        return '';
    }

    let longest = '';
    for (let i = 0; i < s.length; i++) {
        const odd = expand(s, i, i);
        const even = expand(s, i, i + 1);
        longest = longest.length > odd.length ? longest : odd;
        longest = longest.length > even.length ? longest : even;
    }
    return longest;
}

export default longestPalindrome;
