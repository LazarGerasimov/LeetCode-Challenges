// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

var longestSubarray = function(nums) {

//catch the edge case where there are no zeros in the input
if (!nums.includes(0)) {
  return nums.length - 1;
}

//catch the edge case where there are not 1's in the input
if (!nums.includes(1)) {
  return 0;
}

//split the original array by 0 to check for combination values 
let split = nums.join("").split("0");

//longest combination value
let longestCombo = 0;

//create boolean flag to check whether there is only one available number
let isItJustOneNumber = true;

//iterate through the new array to calculate combinations
for (let i = 0; i < split.length - 1; i++) {
  //check current number against next number
  if (split[i] !== "" && split[i + 1] !== "") {
    isItJustOneNumber = false;
    let currentCombo = split[i].length + split[i + 1].length;
    //standard max number strategy
    if (currentCombo > longestCombo) {
    longestCombo = currentCombo; 
    } 
  } 
}

if (isItJustOneNumber) {
  //check for combination of 1's 
  let currentCombo = split.some(x => x.length > 1);
  if (currentCombo) {
    //filter the result of the combinations from above and sort them by length
    let filteredNumber = split.filter(x => x.length > 1).sort((a, b) => b.length - a.length);
    //return the longest (0-indexed) element
    return filteredNumber[0].length;
  } else {
    //if there are no combinations of 1, every separated element with value 1 will return 1 as this is the longest substring
    return 1;
  }
} else {
  //iterate through the split-by-0 array and find out if any given subarray of 1's from the original array is longer than the longest combination of two 1's subarrays by removing just one 0 (which we calculated above)
  for (let i = 0; i < split.length; i++) {
    if (split[i] !== "" && split[i].length > longestCombo) {
      longestCombo = split[i].length;
    }
  }
  return longestCombo;
}
  
};
longestSubarray([1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,1]);


// Example 1:
// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

// Example 2:
// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

// Example 3: 
// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.