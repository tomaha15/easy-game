
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

  let computerSelection = compChoice(choice); // String that is either `Rock`, `Paper` or `Scissors`
  console.log(computerSelection);

  function playRound(playerSelection, computerSelection) {
    if(playerSelection == `Rock` && computerSelection == `Scissors`) {return `You win! Rock beats Scissors`;}
    else if(playerSelection == `Paper`&& computerSelection == `Rock`) {return `You win! Paper beats Rock`;}
    else if(playerSelection == `Scissors`&& computerSelection == `Paper`) {return `You win! Scissors beat Rock`;}
    else if(playerSelection == `Rock`&& computerSelection == `Paper`) {return `You lose! Paper beats Rock`;}
    else if(playerSelection == `Paper`&& computerSelection == `Scissors`) {return `You lose! Scissors beat Paper`;}
    else if(playerSelection == `Scissors`&& computerSelection == `Rock`) {return `You lose! Rock beats Scissors`;}
    else {return `Draw! Try again`}
  }


  const script = prompt(`Chose Rock, Paper or Scissors...`);
  let newScript = script.toLowerCase();
  let getFirst = newScript.slice(0,1);
  let getRest = newScript.slice(1,99);
  let first = getFirst.toUpperCase();

  let final = first + getRest;
  console.log(final);

  
  const playerSelection = final;
  console.log(playerSelection);
  console.log(playRound(playerSelection, computerSelection));

  alert(playRound(playerSelection, computerSelection));