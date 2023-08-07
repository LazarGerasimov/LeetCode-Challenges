/* 

Imagine the layout of an old phone buttons. Check hash table for more info. 

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]

Constraints: 
0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].

*/

const letterCombinations = function(digits) {

  // Will use brute force algorithm to go through all possible scenarios as they are only 4 (per constraints)

  let digitsArr = digits.split("");
  
  let resultArr = [];

  if (digits.length == 0) return [];

    let combinations = new Map();
    combinations.set("2", ["a", "b", "c"]);
    combinations.set("3", ["d", "e", "f"]);
    combinations.set("4", ["g", "h", "i"]);
    combinations.set("5", ["j", "k", "l"]);
    combinations.set("6", ["m", "n", "o"]);
    combinations.set("7", ["p", "q", "r", "s"]);
    combinations.set("8", ["t", "u", "v"]);
    combinations.set("9", ["w", "x", "y", "z"]);

    if (digitsArr.length === 1) {
      resultArr = combinations.get(digitsArr[0]);
      
    } else if (digitsArr.length === 2) {
      let numOneCombinations = combinations.get(digitsArr[0]);
      let numTwoCombinations = combinations.get(digitsArr[1]);
      for (let i = 0; i < numOneCombinations.length; i++) {
        for (let x = 0; x < numTwoCombinations.length; x++) {
          resultArr.push(numOneCombinations[i] + numTwoCombinations[x]);
        }
      }
      
    } else if (digitsArr.length === 3) {
      let numOneCombinations = combinations.get(digitsArr[0]);
      let numTwoCombinations = combinations.get(digitsArr[1]);
      let numThreeCombinations = combinations.get(digitsArr[2]);
      for (let i = 0; i < numOneCombinations.length; i++) {
        for (let x = 0; x < numTwoCombinations.length; x++) {
          for (let y = 0; y < numThreeCombinations.length; y++) {
            resultArr.push(numOneCombinations[i] + numTwoCombinations[x] + numThreeCombinations[y]);
          }
        }
      }
      
    } else if (digitsArr.length === 4) {
      let numOneCombinations = combinations.get(digitsArr[0]);
      let numTwoCombinations = combinations.get(digitsArr[1]);
      let numThreeCombinations = combinations.get(digitsArr[2]);
      let numFourCombinations = combinations.get(digitsArr[3]);
      for (let i = 0; i < numOneCombinations.length; i++) {
        for (let x = 0; x < numTwoCombinations.length; x++) {
          for (let y = 0; y < numThreeCombinations.length; y++) {
            for (let z = 0; z < numFourCombinations.length; z++) {
              resultArr.push(numOneCombinations[i] + numTwoCombinations[x] + numThreeCombinations[y] + numFourCombinations[z]);
            }
          }
        }
      }
    }

    return resultArr;
    
};
letterCombinations("23");
