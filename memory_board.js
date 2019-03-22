//this will only run, when the page is loaded.
document.addEventListener('DOMContentLoaded', initializeGame, false);

function initializeGame() {
    cardsDb.forEach(function(pairOfCards){
        var html = `<div onclick="flipCard()" class="card" data-attribute="${pairOfCards.name}">
                        <img src="${pairOfCards.urlFirstImg}">
                    </div>
                    <div onclick="flipCard()" class="card" data-attribute="${pairOfCards.name}">
                        <img src="${pairOfCards.urlSecondImg}">
                    </div>`;
        var container = document.getElementById('cards-wrapper')
        container.insertAdjacentHTML('afterbegin', html); //this copies the html element and inserts it afterbegin, the copy is the html var
    })
}
