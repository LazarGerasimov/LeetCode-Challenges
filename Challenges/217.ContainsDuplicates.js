// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


const containsDuplicate = function(nums) {
    let isDuplicated = false; 
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                isDuplicated = true; 
                return true;
            }
        }
    }

    if (!isDuplicated) {
        return false;
    }
};
