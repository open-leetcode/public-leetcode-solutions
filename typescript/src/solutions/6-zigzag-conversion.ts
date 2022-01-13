// Leetcode Question 6 - ZigZag Conversion
// https://leetcode.com/problems/zigzag-conversion/
// Level: Medium
// Category: String
// Time complexity: O(n) where n is the length of s
// Memory complexity: O(n) where n is the length of s

const convert = (s: string, numRows: number): string => {
    if (numRows === 1) {
        return s;
    }

    const rows: string[][] = [];
    for (let i = 0; i < numRows; i++) {
        rows[i] = [];
    }

    let row = 0;
    let goingDown = false;
    for (let i = 0; i < s.length; i++) {
        rows[row].push(s[i]);
        if (row === 0 || row === numRows - 1) {
            goingDown = !goingDown;
        }
        row += goingDown ? 1 : -1;
    }

    return rows.map(row => row.join('')).join('');
}

export default convert;