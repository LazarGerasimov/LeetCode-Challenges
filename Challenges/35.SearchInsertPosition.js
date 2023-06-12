const searchInsert = function(nums, target) {

  let isFound = false;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      isFound = true;
      return i;
    }
  }

  if (!isFound) {

    for (let i = 0; i < nums.length; i++) {

      if (target < nums[0]) {
        return 0;
      }

      if (target > nums[i] && target < nums[i + 1]) {
        return i + 1;
      }

      if (target > nums[nums.length - 1]) {
        return nums.length;
      }

    }
  }
};