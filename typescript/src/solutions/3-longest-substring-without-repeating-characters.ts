// Question 3 - Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Level: Medium
// Category: String
// Time complexity: O(n) where n is the length of s
// Memory complexity: O(n) where n is the length of s

const lengthOfLongestSubstring = (s: string): number => {
    const map: { [key: string]: number } = {};
    let max = 0;
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map[char] !== undefined) {
            start = Math.max(map[char] + 1, start);
        }
        map[char] = i;
        max = Math.max(max, i - start + 1);
    }
    return max;
}

export default lengthOfLongestSubstring;