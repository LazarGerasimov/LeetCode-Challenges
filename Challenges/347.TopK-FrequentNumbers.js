// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.


const topKFrequent = function(nums, k) {

    //set a collection object where we will asign values
    let collection = {}

    //loop through the nums array to check every element
    for (let i = 0; i < nums.length; i++) {  

      //if collection does not have that element as property, add it
      if (!collection.hasOwnProperty(nums[i])) {
        collection[nums[i]] = 1;
      //if it does, increment its value
      } else {
        collection[nums[i]]++
      }
    }

    //push results in an array
    let resultArr = Object.entries(collection);

    //sort result array by collection values
    resultArr.sort((a, b) => b[1] - a[1]);

    //get the first two elements
    let sliced = resultArr.slice(0, k);

    //return their keys
    let answer = sliced.map(x => Number(x[0]));

    // console.log(answer)
    return answer;
};
topKFrequent([1, 2, 2, 2, 3, 4, 1, 2], 2);

// Example 1: 
// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Example 2:
// Input: nums = [1], k = 1
// Output: [1]