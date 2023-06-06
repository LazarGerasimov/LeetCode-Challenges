Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

const isValid = function(s) {

    let arr = [];
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (s.length < 2) {
            return false;
        }

        if (s.length % 2 === 0) {
            return false;
        }

        if (char === "(") {
            arr.push(")");
        } else if (char === "[") {
            arr.push("]");
        } else if (char === "{") {
            arr.push("}");
        } else if (char !== arr.pop()){
            return false; 
        }

    }

    return arr.length === 0;
    
};


Example 1
Input: s = "()"
Output: true


Example 2
Input: s = "()[]{}"
Output: true

Example 3
Input: s = "(]"
Output: false