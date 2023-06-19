// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.


const isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;

    //create two arrays to store indexes and match them later
    let sArr = [];
    let tArr = [];

    for (let i = 0; i < s.length; i++) {
      sArr.push(s.indexOf(s[i]));
      tArr.push(t.indexOf(t[i]));
      if (sArr[i] !== tArr[i]) return false;
    }

    return true;
};

// Example 1
// Input: s = "egg", t = "add"
// Output: true

// Example 2
// Input: s = "foo", t = "bar"
// Output: false

// Example 3
// Input: s = "paper", t = "title"
// Output: true