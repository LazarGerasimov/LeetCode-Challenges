const largestAltitude = function(gain) {

  gain.unshift(0);

  let totalAltitude = 0;
  let maxAltitude = 0; 

  for (let i = 1; i < gain.length; i++) {
    totalAltitude += gain[i];
    
    if (totalAltitude > 0 && totalAltitude > maxAltitude) {
      maxAltitude = totalAltitude; 
    }
    console.log(maxAltitude)
  }

  return maxAltitude > 0 ? maxAltitude : 0;

};
largestAltitude([-5,1,5,0,-7]);