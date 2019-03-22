//this will only run, when the page is loaded.
document.addEventListener('DOMContentLoaded', initializeGame, false);

function initializeGame() {
    cardsDb.forEach(function(pairOfCards){
        var html = `<div onclick="flipCard()" class="card" data-attribute="${pairOfCards.name}">
                        <img src="${pairOfCards.urlFirstImg}" height="92" width="92" opacity: 0.5>
                    </div>
                    <div onclick="flipCard()" class="card" data-attribute="${pairOfCards.name}">
                        <img src="${pairOfCards.urlSecondImg}" height="92" width="92" opacity: 0.5;>
                    </div>`;
        var container = document.getElementById('cards-wrapper')
        container.insertAdjacentHTML('afterbegin', html); //this copies the html element and inserts it afterbegin, the copy is the html var
    })
}

