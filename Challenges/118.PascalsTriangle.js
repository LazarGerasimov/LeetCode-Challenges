// Given an integer numRows, return the first numRows of Pascal's triangle.In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]

// Constraints:
// 1 <= numRows <= 30

const generate = function(numRows) {
    let resultArr=[[1]]
    for (let i = 1; i < numRows; i++){
        const tempArr =[1]
        for (let j = 1; j < i; j++){
            tempArr.push(resultArr[i-1][j] + resultArr[i-1][j-1])
        }
        tempArr.push(1)
        resultArr.push(tempArr)
    }
    console.log(resultArr);
    return resultArr
};
generate(5);