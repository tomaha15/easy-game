
let getComputerChoice = function(min, max) {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  } 

  let choice = getComputerChoice();


  function compChoice(choice) {
    let result;

    if(choice < 2) {
      result = `Rock`;}
      else if(choice > 2) {result = `Paper`;}
      else {result = `Scissors`;}

    return result;  
  }
  console.log(compChoice(choice));

  let computerSelection = compChoice(choice);
  console.log(computerSelection);