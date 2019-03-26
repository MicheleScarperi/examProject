//this will only run, when the page is loaded.
document.addEventListener('DOMContentLoaded', initializeGame, false);

function initializeGame() {
    cardsDb.forEach(function(cardInput){
        var html = `<div onclick="flipCard(this)" class="back_card" data-attribute="${cardInput.name}">
                        <img class="img1" src="${cardInput.img}" height="110" width="110" opacity: 0.5>
                        <img class="img2" src="${cardInput.front_face}" height="110" width="110">
                    </div>`;

        var container = document.getElementById('cards-wrapper')
        container.insertAdjacentHTML('afterbegin', html); //this copies the html element and inserts it afterbegin, the copy is the html var
    })

}

const cards = document.querySelectorAll('.back_card');
// This adds an event listener to all cards in the DB. To check later on whether a card has been flipped or not. 
/*
function addevent(card){
    for (i=0; i<cardsDb.length; i++){
        cardsDb.addEventListener('click', flipCard);
    }
    
};
addevent();
*/
var hasFlipped = false; 
var lockBoard = false;
var firstCard; 
var secondCard;

  
// A function that checks whether we have a match or not. 
  //function checkMatchCards() {
    //if (firstCard.cardsDb.name === secondCard.cardsDb.name) {
        // do somehting 
  //  } 
//} 

function disableCards(){
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function resetBoard() {
    [hasFlipped, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
//This function flips a card 180° by using css. 
function flipCard(element) {
    if (lockBoard) return;
    if (this === firstCard) return;
    element.classList.toggle('flip');
    if (!hasFlipped) {
        hasFlipped = true;
        firstCard = this;
        return;
    }
}

secondCard = this;

function checkMatchCards () {
    if (firstCard.cardsDb.name === secondCard.cardsDb.name) {
        disableCards();
        return;
    }
    unFlipCards();
}
checkMatchCards();

function unFlipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500)
}