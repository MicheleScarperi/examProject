var game = new Game();

game.initializeGame();

const cards = document.querySelectorAll('.back_card');
//Function that adds a css class to the .back_card css class.
//LockBoard basically prevents flipping before cards are matched or hidden.

//Adds an event listener to each card in html and fires the flipcard function onclick.
cards.forEach(card => card.addEventListener('click', function(event){
    game.flipCard(event);
}));
