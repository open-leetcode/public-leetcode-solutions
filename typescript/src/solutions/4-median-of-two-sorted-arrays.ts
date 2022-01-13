// Question 4: Median of Two Sorted Arrays
// https://leetcode.com/problems/median-of-two-sorted-arrays/
// Level: Hard
// Category: Array
// Time complexity: O(log(m+n)) where m and n are the lengths of nums1 and nums2
// Memory complexity: O(1)

const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
    const nums = nums1.concat(nums2).sort((a, b) => a - b);
    const mid = Math.floor(nums.length / 2);
    return nums.length % 2 === 0 ? (nums[mid - 1] + nums[mid]) / 2 : nums[mid];
}

export default findMedianSortedArrays;