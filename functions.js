var game = new Game();

//global variables.
var cardHasFlipped = false;
var firstCard;
var secondCard; 
var lockBoard = false;
var scoreCountP1 = 0;
var missCountP1 = 0;
var scoreCountP2 = 0;
var missCountP2 = 0;


game.initializeGame();


const cards = document.querySelectorAll('.back_card');
//Function that adds a css class to the .back_card css class.
//LockBoard basically prevents flipping before cards are matched or hidden.

//Adds an event listener to each card in html and fires the flipcard function onclick.
cards.forEach(card => card.addEventListener('click', function(event){
    game.flipCard(event);
}));

 /* MATCHING LOGIC */

//Make a function that checks for matches.
// const checkForMatch = () => {
//     if (firstCard.dataset.attribute === secondCard.dataset.attribute) { 
//         disableCards();
//         console.log("match, cards have been disabled due to match.");
//        return;
//         } else { 
//         missCountP1++;
//         unflipCards();
//         console.log("misscountp1= " + missCountP1);
//         }
//     }
//Make a function that disables matched cards. 
// const disableCards = () => {
    
//     firstCard.removeEventListener('click', flipCard);
//     secondCard.removeEventListener('click', flipCard);
    
//     console.log("disableCards - cards are disabled now");

//     resetBoard();
    
//     console.log("disableCards - Board has been reset");
// }

  //Make a function that unflips the cards if they were not a match.
//   const unflipCards = () => {

//     lockBoard = true;

//       setTimeout(() => {
//           firstCard.classList.remove('flip');
//           secondCard.classList.remove('flip');

//           resetBoard();
//       }, 1500);
//       console.log("cards have been unflipped");
//   }

  //This function resets the card variables so that we can keep playing.
  //This function needs to be used by disbleCards and unflipCards.
//   const resetBoard = () => {
    
//     cardHasFlipped = false;
//     lockBoard = false;
//     firstCard = null;
//     secondCard = null; 
    
//     console.log("board successfully reset")
//   }

//   const checkGameProgress = () => {
//       if (scoreCountP1 + scoreCountP2 == 18) {
//         alert('Congratulations, you guys finished the Game. ' + 'Scores are ' + 
//         'Player1: ' + scoreCountP1 + 'Player2: ' + scoreCountP2)
//       }
//   }
  // Maybe replace player1 and player2 with their inserted names later. 