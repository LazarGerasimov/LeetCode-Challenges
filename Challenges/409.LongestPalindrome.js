/*Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

Constraints: 
1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only. */


function solve(input) {

  // Create collection to store values for each char
  let collection = {};
  let longestPalindromeLength = 0; 

  for (let char of input) {
    if (!collection.hasOwnProperty(char)) {
      collection[char] = 1;
    } else {
      // If we already have one occurrence, delete the property and increase the maximum length of the palindrome by 2
      delete collection[char];
      longestPalindromeLength += 2;
    }
  }

  // If object has no values it means we only have pairs available therefore the result will be equal to the accumulated value in longestPalindromeLength variable. If object has any single values left, we can add 1 (no matter which) in the middle of the palindrome and the longest palindrom length will be current length + 1
  return Object.values(collection).length > 0 ? longestPalindromeLength + 1: longestPalindromeLength;
  // return longestPalindromeLength + 1;
  
}
solve("bb");

