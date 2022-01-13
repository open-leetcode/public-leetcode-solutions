// Question 1 - Two Sum
// https://leetcode.com/problems/two-sum/
// Level: Easy
// Category: Hash Table
// Time complexity: O(n) where n is the length of nums
// Memory complexity: O(n) where n is the length of nums

const twoSum = (nums: number[], target: number): number[] => {
  const map: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[nums[i]] = i;
  }
  return [];
};

export default twoSum;