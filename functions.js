document.addEventListener('DOMContentLoaded', initializeGame, false);

//global variables.
var cardHasFlipped = false;
var firstCard;
var secondCard; 
var lockBoard = false;

// This function creates our HTML, when our game starts.
function initializeGame() {
    cardsArray.forEach(function(cardInput){
        
        
        var html = `<div onclick="flipCard(this)" class="back_card" data-attribute="${cardInput.name}">
        <img class="img1" src="${cardInput.img}">
        <img class="img2" src="${cardInput.backimg}">
        </div>`;
        
        var container = document.getElementById('cards-wrapper')
        container.insertAdjacentHTML('afterbegin', html); //this copies the html element and inserts it afterbegin, the copy is the html var
    })
    console.log(cardsArray)
    }
//This doesnt work, referencing problem (use cards array -simon).
const cards = document.querySelectorAll('.back_card');

console.log(cards);
  
//Function that adds a css class to the .back_card css class.
//LockBoard basically prevents flipping before cards are matched or hidden.
function flipCard(element) {
    if (lockBoard) 
    return; 
    // if (this === firstCard)
    // return;
    
    element.classList.add('flip');

    if (!cardHasFlipped) {
        cardHasFlipped = true;
        //FIND OUT how to reference with this to one indi. card
        //Problem rn is that entire window is selected with this.
        firstCard = this;
        console.log(this);
    } else {
        secondCard = this;
        console.log(secondCard);
        checkForMatch(firstCard, secondCard);
    }
}


//Adds an event listener to each card in html and fires the flipcard function onclick.
cards.forEach(card => card.addEventListener('click', flipCard(this)));

 
/* MATCHING LOGIC */

//Make a function that checks for matches.
// const checkForMatch = () => {
//     if (firstCard.attribute === secondCard.attribute) {
//         disableCards();
//         console.log("match");
//         return;
//     }

//     unflipCards();
// }
function checkForMatch(cardOne, cardTwo){
    if(cardOne.name == cardTwo.name){
        console.log(cardOne.html)
        console.log("Match")
    }
}

  //Make a function that disables matched cards. 
const disableCards = () => {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

  //Make a function that unflips the cards if they were not a match.
  const unflipCards = () => {

    lockBoard = true;

      setTimeout(() => {
          firstCard.classList.remove('flip');
          secondCard.classList.remove('flip');

          resetBoard();
      }, 1500);
  }

  //This function resets the card variables so that we can keep playing.
  //This function needs to be used by disbleCards and unflipCards.
  const resetBoard = () => {
    cardHasFlipped = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null; 
  }