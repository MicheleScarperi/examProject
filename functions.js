document.addEventListener('DOMContentLoaded', initializeGame, false);

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
    }

const cards = document.querySelectorAll('.back_card');
  
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
        firstCard = this; 
        console.log(firstCard);
        return;
    }
    
    secondCard = this;
    console.log(secondCard);

    checkForMatch();
}


//Adds an event listener to each card in html and fires the flipcard function onclick.
cards.forEach(card => card.addEventListener('click', flipCard));

 
/* MATCHING LOGIC */

//global variables.
var cardHasFlipped = false;
var firstCard;
var secondCard; 
var lockBoard = false;

 //Make a function that checks for matches. 
const checkForMatch = () => {
    if (firstCard.dataset.attribute === secondCard.dataset.attribute) {
        disableCards();
        return;
    }

    unflipCards();
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