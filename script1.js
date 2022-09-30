function game() {   // when called runs (*) 5 times
    for (let i = 0; i < 5; i++){

      console.log(i);
    
     
        function playRound() {
            
            let randomNum = function(min, max) {
                min = Math.ceil(1);
                max = Math.floor(3);
                return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
              } 
            
              let choice = randomNum();// var with random number

              function compString(choice) {
                let result;
            
                if(choice < 2) {
                  result = `Rock`;}
                  else if(choice > 2) {result = `Paper`;}
                  else {result = `Scissors`;}
            
                return result;  
              }

            let computerSelection = compString(choice);//var used to compare with player
            console.log(computerSelection);


              function askPlayer(){
                const script = prompt(`Chose Rock, Paper or Scissors...`); //Get player choice (case insensitive)
                let newScript = script.toLowerCase();
                let getFirst = newScript.slice(0,1);
                let getRest = newScript.slice(1,99);
                let first = getFirst.toUpperCase();
              
                let final = first + getRest;
                //  console.log(final);
                return final;
              }
              const playerSelection = askPlayer();
            // return askPlayer();//test to be removed
            
            function fight (playerSelection, computerSelection) {
                if(playerSelection == `Rock` && computerSelection == `Scissors`) {return `You win! Rock beats Scissors`;}
                else if(playerSelection == `Paper`&& computerSelection == `Rock`) {return `You win! Paper beats Rock`;}
                else if(playerSelection == `Scissors`&& computerSelection == `Paper`) {return `You win! Scissors beat Rock`;}
                else if(playerSelection == `Rock`&& computerSelection == `Paper`) {return `You lose! Paper beats Rock`;}
                else if(playerSelection == `Paper`&& computerSelection == `Scissors`) {return `You lose! Scissors beat Paper`;}
                else if(playerSelection == `Scissors`&& computerSelection == `Rock`) {return `You lose! Rock beats Scissors`;}
               else {return `Draw! Try again`}
              }
              if (fight (playerSelection, computerSelection) === 'Draw! Try again') {console.log("envoked"); i--;}
              console.log(i+` Round(s)`);

              //score keeping
              
              
              
              if (fight (playerSelection, computerSelection) === "You win! Rock beats Scissors" || fight (playerSelection, computerSelection) === "You win! Paper beats Rock" || fight (playerSelection, computerSelection) === "You win! Scissors beat Rock" ) {
                console.log("Score envoked")
                playerScore++;
              }
              
              if (fight (playerSelection, computerSelection) === "You lose! Paper beats Rock" || fight (playerSelection, computerSelection) === "You lose! Scissors beat Paper" || fight (playerSelection, computerSelection) === "You lose! Rock beats Scissors" ) {
                compScore++;
              }
              // score
            

            console.log(playerSelection + computerSelection);
              alert (fight(playerSelection, computerSelection)+`
              Player:${playerScore} Computer:${compScore}`);

            
              console.log(playerScore);
               console.log(`Player:${playerScore} Computer:${compScore}`);

              
            
              
              return fight(playerSelection, computerSelection);
        }

        
        playRound();        

    }

  }

  let playerScore = 0;
  let compScore = 0;
game();