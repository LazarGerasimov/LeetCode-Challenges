/*
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Example 1:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:
Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

*/

const searchMatrix = function(matrix, target) {

  let isItInTheMatrix = false; 
  
    for (let i = 0; i < matrix.length; i++) {
      for (let x = 0; x < matrix[i].length; x++) {
        if (matrix[i][x] === target) {
          isItInTheMatrix = true; 
        }
      }
    }

    return isItInTheMatrix;

    /* Shorter solution using flat method: 
    
      return matrix.flat(1).includes(target) 

      The flat() method creates a new array with all sub-array elements concatenated into it       recursively up to the specified depth. The depth level specifying how deep a nested          array structure should be flattened. Defaults to 1.
    */
};
searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3);