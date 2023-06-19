var checkStraightLine = function(coordinates) {
    let isStraight = true; 
    let diff = Math.abs(coordinates[1][1] - coordinates[1][0]);
    console.log(diff)
    
    for (let i = 2; i < coordinates.length; i++) {
      if (Math.abs(coordinates[i][1] - coordinates[i][0]) !== diff) {
        isStraight = false;
      }
    }

  return isStraight;
};

checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]);