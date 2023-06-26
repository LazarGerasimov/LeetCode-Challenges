// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

const singleNumber = function(nums) {

    nums.sort((a, b) => a - b); 
    let i = 0;

    // There will be only one solo number and we will be deleting elements until there is only that number left
    while (nums.length > 1) {

      if (nums[i] === nums[i + 1]) {
        nums.splice(i, 2); // delete the two equal elements from array
        continue; //skip iteration so we can start again on the same index
      }
      
      i++
    } 

    return nums.join(); // conver arr to str
};
singleNumber([4,1,2,1,2]);



// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:
// Input: nums = [1]
// Output: 1

// Constraints: 
// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104

