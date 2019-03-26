//this will only run, when the page is loaded.
document.addEventListener('DOMContentLoaded', initializeGame, false);

function initializeGame() {
    cardsDb.forEach(function(cardInput){
        var html = `<div onclick="flipCard(this)" class="back_card" data-attribute="${cardInput.name}">
                        <img class="img1" src="${cardInput.img}" height="92" width="92" opacity: 0.5>
                        <img class="img2" src="${cardInput.front_face}" height="92" width="92">
                    </div>`;

        var container = document.getElementById('cards-wrapper')
        container.insertAdjacentHTML('afterbegin', html); //this copies the html element and inserts it afterbegin, the copy is the html var
    })

}

const cards = document.querySelector('.back_card');

//
function flipCard(element) {
    element.classList.toggle('flip');
}

