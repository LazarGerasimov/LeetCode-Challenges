// There is a function signFunc(x) that returns:

// 1 if x is positive.
// -1 if x is negative.
// 0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.

// Return signFunc(product).

/**
 * @param {number[]} nums
 * @return {number}
 */

const arraySign = function (nums) {
    var result = 1;
    let negativeArray = [];

    for (num of nums) {

        if (num === 0) {
            result = 0;
            return result;
        }

        if (num < 0) {
            negativeArray.push(num);
        }
    }

    if (negativeArray.length % 2 === 0) {
        result = 1;
    } else {
        result = -1;
    }

    return result
};

// Examples: 

// Input: nums = [-1,-2,-3,-4,3,2,1]
// Output: 1
// Explanation: The product of all values in the array is 144, and signFunc(144) = 1

// Input: nums = [1,5,0,2,-3]
// Output: 0
// Explanation: The product of all values in the array is 0, and signFunc(0) = 0

// Input: nums = [-1,1,-1,1,-1]
// Output: -1
// Explanation: The product of all values in the array is -1, and signFunc(-1) = -1