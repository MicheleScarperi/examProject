//this will only run, when the page is loaded.
document.addEventListener('DOMContentLoaded', initializeGame, false);

function initializeGame() {
    cardsDb.forEach(function(pairOfCards){
        var html = `<div onclick="flipCard()" class="back-card" data-attribute="${pairOfCards.name}">
                        <img class="img1" src="${pairOfCards.urlFirstImg}" height="92" width="92" opacity: 0.5>
                        <img class="img2" src="${pairOfCards.front_face}" height="92" width="92">
                    </div>
                    <div onclick="flipCard()" class="back-card" data-attribute="${pairOfCards.name}">
                        <img class="img1" src="${pairOfCards.urlSecondImg}" height="92" width="92" opacity: 0.5;>
                        <img class="img2" src="${pairOfCards.front_face}" height="92" width="92">
                    </div>`;
        var container = document.getElementById('cards-wrapper')
        container.insertAdjacentHTML('afterbegin', html); //this copies the html element and inserts it afterbegin, the copy is the html var
    })
}

