// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

const canPlaceFlowers = function(flowerbed, n) {
  let space = 0;

  for (let i = 0; i < flowerbed.length; i++) {

    //for edge cases where we only have 1 slot 
    if (flowerbed.length === 1 && flowerbed[0] == 0) {
      space++;
      break;
    }

    //for cases where first two slots are zeros
    if (flowerbed[0] == 0 && flowerbed[1] == 0) {
      flowerbed[0] = 1;
      space++;
    }

    //for cases where last two slots are zeros
    if (flowerbed[flowerbed.length - 1] == 0 && flowerbed[flowerbed.length - 2] == 0) {
      flowerbed[flowerbed.length - 1] = 1;
      space++;
    }

    //after the previous conditions are checked and flowerbed amended, check for consecutive 3 empty slots to plant a flower
    if (flowerbed[i] == 0 && flowerbed[i + 1] == 0 && flowerbed[i + 2] == 0) {
      space++;
      flowerbed[i + 1] = 1;
    }
  }

  return n <= space;
};

// Example 1: 
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true

// Example 2:
// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

// Constraints:
// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length