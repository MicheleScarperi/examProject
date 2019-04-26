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
var totalMiss = 0;
var totalScore = 0;
var totalCount = 0;

game.initializeGame();


const cards = document.querySelectorAll('.back_card');
//Function that adds a css class to the .back_card css class.
//LockBoard basically prevents flipping before cards are matched or hidden.

//Adds an event listener to each card in html and fires the flipcard function onclick.
cards.forEach(card => card.addEventListener('click', function(event){
    game.flipCard(event);
}));

console.log('This is scoreCountP1 in functions.js ' + scoreCountP1)