//this will only run, when the page is loaded.
document.addEventListener('DOMContentLoaded', initializeGame, false);

function initializeGame() {
    cardsDb.forEach(function(pairOfCards){
        var html = `<div onclick="flipCard()" class="card" data-attribute="${pairOfCards.name}">
                        <img src="${pairOfCards.urlFirstImg}" height="92" width="92">
                    </div>
                    <div onclick="flipCard()" class="card" data-attribute="${pairOfCards.name}">
                        <img src="${pairOfCards.urlSecondImg}" height="92" width="92">
                    </div>`;
        var container = document.getElementById('cards-wrapper')
        container.insertAdjacentHTML('afterbegin', html);
    })
}

