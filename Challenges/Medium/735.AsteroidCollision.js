/*We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

Example 1: 
Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

Example 2: 
Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.

Example 3:
Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

Constraints:
2 <= asteroids.length <= 104
-1000 <= asteroids[i] <= 1000
asteroids[i] != 0

*/

const asteroidCollision = function(asteroids) {

  let resultArr = [];
  let isDestroyed = false;

  for (let i = 0; i < asteroids.length; i++) {
    
    // skip current asteroid if it was destroyed in the previous step 
    if (isDestroyed) {
      isDestroyed = false;
      continue;
    }
    
    let currentAsteroid = asteroids[i];
    let previousAsteroid = asteroids[i - 1];
    let nextAsteroid = asteroids[i + 1];

    
    if (currentAsteroid > 0) {
      // case where the next asteroid is negative (there will be impact)
      if (nextAsteroid < 0 && currentAsteroid + nextAsteroid !== 0) {
        let winner = Math.max(currentAsteroid, Math.abs(nextAsteroid));
        if (winner === currentAsteroid) {
          resultArr.push(currentAsteroid);
        }
        continue;
      } 
      // case where the next asteroid is negative (push to the result array and catch it later with the negative logic from below)
      if (nextAsteroid < 0) {
        resultArr.push(currentAsteroid);
        continue;
      }
      // case where next asteroid is positive or this asteroid is the last one on the row
      if (nextAsteroid > 0 || i == asteroids.length - 1) {
        resultArr.push(currentAsteroid);
        continue;
      }
      // caswe where the next one is negative and its absolute value is equal to the current value (they destroy each other on impact)
      if (currentAsteroid + nextAsteroid === 0) {
        isDestroyed = true; 
        continue;
      }
    }

    
    if (currentAsteroid < 0) {
      // case where the last asteroid in the result is negative and they will never cross paths
      if (resultArr[resultArr.length - 1] < 0 || resultArr.length === 0) {
        resultArr.push(currentAsteroid);
        continue;
      }
    
      // case where the negative asteroid is equal to the last one in the resultArr
      if (resultArr[resultArr.length - 1] === Math.abs(currentAsteroid)) {
        resultArr.pop();
        continue;
      }

      // case where the negative asteroid is bigger than the last one in the resultArr
      if (resultArr.length > 0 && Math.abs(currentAsteroid) > Math.abs(resultArr[resultArr.length - 1])) {
        resultArr.pop();
        resultArr.push(currentAsteroid);
        continue;
      }

      // case where the negative asteroid is smaller than the last one in the resultArr (gets destroyed on impact)
      if (resultArr.length > 0 && Math.abs(currentAsteroid) < resultArr[resultArr.length - 1]) {
        continue;
      }

      

      // case where the negative asteroid is the last one in the array
      if (i == asteroids.length - 1) {
        resultArr.push(currentAsteroid);
        continue;
      }    
    }
  }

  console.log(resultArr);
  return resultArr;
};
asteroidCollision([1,1,1,-2]);
