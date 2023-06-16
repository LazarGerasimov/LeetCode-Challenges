var moveZeroes = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            i--;
        }
      console.log(nums);
    }
  
    return nums;
};
moveZeroes([0, 1, 0])