
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

//        Longest Common Prefix                  // 


/**
 * @param {string[]} strs
 * @return {string}
 */


const longestCommonPrefix = function(strs) {
  let output = [];
  let sortedArray = strs.sort((a, b) => a < b ? -1 : 0);

  for (let i = 0; i < strs[0].length; i++) {
    if (sortedArray[0][i] == sortedArray[sortedArray.length - 1][i]) {
      output.push(sortedArray[0][i]);
    } else {
      break;
    }
  }

  if (output.length > 0) {
    return output.join("")
  } else {
    return ""
  }
};


// Example 1 

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.