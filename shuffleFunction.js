cards.addEventListener("click", flipCard)

/*
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