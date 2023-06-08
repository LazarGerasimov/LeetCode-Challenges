// Write a program that calculates the profit a club makes for the night and whether they hit their target. 

// The price of a cocktail equals its length.

// If the the whole order is a odd number, there is a 25% discount. 

// The input is as follow: 
// First element equls the desired profit
// Every odd index equals the cocktail name
// Every even index after it - the amount of drinks from the cocktail

// If you receive a "Party" command, stop the program and print how much more money you need to hit the target

// If you hit the target, print "Target acquired".

// In all cases - print the total profit


function club(input) {

  let desiredProfit = Number(input[0]);
  let target = desiredProfit;
  let currentProfit = 0;
  let i = 1;

  while (target > 0) {

    if (input[i] == "Party!") {
      let diff = desiredProfit - currentProfit;
      console.log(`We need ${diff.toFixed(2)} leva more.`);
      break;
    }

    let cocktailsPrice = Number(input[i].length) * Number(input[i + 1]);

    if (cocktailsPrice % 2 !== 0) {
      cocktailsPrice = cocktailsPrice * 0.75;
    }

    currentProfit += cocktailsPrice;
    target -= cocktailsPrice;
    
    if (currentProfit >= desiredProfit) {
      console.log("Target acquired.");
      break;
    }

    // console.log(currentProfit);
    i += 2;
  }

  console.log(`Club income - ${currentProfit.toFixed(2)} leva.`)

}

club(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"]);


club([(["500",
"Bellini",
"6",
"Bamboo",
"7",
"Party!"])])
