// Leetcode Question 7 - Reverse Integer
// https://leetcode.com/problems/reverse-integer/
// Level: Easy
// Category: Math
// Time complexity: O(1)
// Memory complexity: O(1) 

const reverse = (x: number): number => {
    const reversed = x.toString().split('').reverse().join('');
    const reversedInt = parseInt(reversed);
    if (reversedInt.toString().length !== reversed.length) {
        return 0;
    }
    return reversedInt;
}

export default reverse;