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

const cards = document.querySelector('.back_card');

//This function flips a card 180° by using css. 
function flipCard(element) {
    element.classList.toggle('flip');
}


