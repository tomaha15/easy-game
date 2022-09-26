let getComputerChoice = function(min, max) {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  } 
console.log(getComputerChoice()); // Returns random number between 1 and 3

