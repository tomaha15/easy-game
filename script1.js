  let computer = () => {
                
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
      return computerSelection;
  }
  
  



         
            

        let playerSelection;

        const rock = document.querySelector(`.rock`);
        const paper = document.querySelector(`.paper`);
        const sciss = document.querySelector(`.sciss`);


      
     

        rock.addEventListener('click', () => {playerSelection = `Rock`;
        
              let komp = computer();
              computer();

              if (komp == `Scissors`) {playerScore++; div.textContent = `Player: ${playerScore} Comp: ${compScore}`;
            }
              else if(komp == `Paper`) {compScore++; div.textContent = `Player: ${playerScore} Comp: ${compScore}`;}
              
              if( playerScore == 5 || compScore == 5) {
                alert(`Game Over 
                ${`Player: ${playerScore}    Comp: ${compScore}`}`)
                location.reload();
              }

              console.log(playerScore);
              console.log(compScore);

          });


        paper.addEventListener('click', () => {playerSelection = `Paper`;
        let komp = computer();
        computer();

        if (komp == `Rock`) {playerScore++; div.textContent = `Player: ${playerScore} Comp: ${compScore}`;
      }
        else if(komp == `Scissors`) {compScore++; div.textContent = `Player: ${playerScore} Comp: ${compScore}`;}
          
        if( playerScore == 5 || compScore == 5) {
          alert(`Game Over 
          ${`Player: ${playerScore}    Comp: ${compScore}`}`)
          location.reload();
        }
      console.log(playerScore);
      console.log(compScore);
        

      });
        
      
      sciss.addEventListener('click', () => {playerSelection = `Scissors`;
        let komp = computer();
        computer();

        if (komp == `Paper`) {playerScore++; div.textContent = `Player: ${playerScore} Comp: ${compScore}`;
      }
        else if(komp == `Rock`) {compScore++; div.textContent = `Player: ${playerScore} Comp: ${compScore}`;}
          
        if( playerScore == 5 || compScore == 5) {
          alert(`Game Over 
          ${`Player: ${playerScore}    Comp: ${compScore}`}`)
          location.reload();
        }
      console.log(playerScore);
      console.log(compScore);
      
      });

   


      
      let playerScore = 0;
      let compScore = 0;


    const div = document.createElement(`div`); // Add score text element
    div.textContent = `Player: ${playerScore} Comp: ${compScore}`;
    const body = document.querySelector('#body');
    body.insertBefore(div, rock);








  
