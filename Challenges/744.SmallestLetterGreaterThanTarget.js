// 744. Find Smallest Letter Greater Than Target

// You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.



  /**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = function(letters, target) {

    if (target === 'z') {
        return letters[0];
    }

    let smallestChar = "";

    let targetCharCode = target.charCodeAt(0);

    for (let i = 0; i < letters.length; i++) {

        if (letters[i].charCodeAt(0) > targetCharCode) {
            smallestChar = letters[i];
            return smallestChar;
        } 

    }

    if (smallestChar === "") {
        return letters[0];
    }

};

// Example 1
// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

// Example 2
// Input: letters = ["c","f","j"], target = "c"
// Output: "f"
// Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.

