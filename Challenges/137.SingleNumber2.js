// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.


/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {

  //sort the array so we can get the numbers in triples
  nums.sort((a, b) => a - b);

  //check every first number out of three whether it matches the next two, if it does not, that is the solo number. Increment by 3 on each step. 
  for (let i = 0; i < nums.length; i+=3) {
    if (nums[i] === nums[i + 1] && nums[i + 1] === nums[i + 2]) {
      continue;
    } else {
      return nums[i];
    }
  }

  
};
singleNumber([2, 2, 3, 2]);

// Example 1: 
// Input: nums = [2,2,3,2]
// Output: 3

// Example 2:
// Input: nums = [0,1,0,1,0,1,99]
// Output: 99