// Unique Generated PIN Codes 

// Write a program that generates 3-digit unique PIN codes based on the numbers provided in the input 

// For a PIN to be valid, it needs to meet the following conditions: 

// First and third digit must be even numbers
// Second digit must be a prime number between 2 and 7


function solve(input) {

  // prime numbers = 2, 3, 5, 7
  let num1 = input[0];
  let num2 = input[1];
  let num3 = input[2];

  let possibleCombinationsForNum1 = [];
  let possibleCombinationsForNum2 = [];
  let possibleCombinationsForNum3 = [];

  for (let i = 1; i <= num1; i++) {
    if (i % 2 === 0) {
      possibleCombinationsForNum1.push(i);
    }
  }

  for (let i = 2; i <= num2; i++) {
    if (i === 2 || i === 3 || i === 5 || i === 7) {
      possibleCombinationsForNum2.push(i);
    }
  }

  for (let i = 1; i <= num3; i++) {
    if (i % 2 === 0) {
      possibleCombinationsForNum3.push(i);
    }
  }

  for (let i = 0; i < possibleCombinationsForNum1.length; i++) {
    for (let x = 0; x < possibleCombinationsForNum2.length; x++) {
      for (let y = 0; y < possibleCombinationsForNum3.length; y++) {
        let tempNumber = Number(possibleCombinationsForNum1[i].toString() + possibleCombinationsForNum2[x].toString() + possibleCombinationsForNum3[y].toString());
        console.log(tempNumber.toString().split("").join(" "));
      }
    }
  }

}
solve([3, 5, 5]);

//Constraints: All numbers in the input will be between 1 and 9

// Example 1: 
// [3, 5, 5] will generate the following PIN codes: 
// 2 2 2
// 2 2 4
// 2 3 2
// 2 3 4 
// 2 5 2 
// 2 5 4 

// Example 2: 
// [8, 2, 8] will generate the following PIN codes: 
// 2 2 2
// 2 2 4 
// 2 2 6 
// 2 2 8
// 4 2 2 
// 4 2 4 
// 4 2 6 
// 4 2 8
// 6 2 2 
// 6 2 4
// 6 2 6
// 6 2 8
// 8 2 2 
// 8 2 4 
// 8 2 6
// 8 2 8