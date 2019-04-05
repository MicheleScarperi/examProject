//this will only run, when the page is loaded.
document.addEventListener('DOMContentLoaded', initializeGame, false);

/*function initializeGame() {
  //  var html = '' MARTEN
    cardsDb.forEach(function(cardInput){
        
    // html += cardInput.createHTML()
        

        var html = `<div onclick="flipCard(this)" class="back_card" data-attribute="${cardInput.name}">
                        <img id="${cardInput.name}" class="img1" src="${cardInput.img}" height="110" width="110" opacity: 0.5>
                        <img class="img2" src="${cardInput.front_face}" height="110" width="110">
                    </div>`;

        var container = document.getElementById('cards-wrapper')
        container.insertAdjacentHTML('afterbegin', html); //this copies the html element and inserts it afterbegin, the copy is the html var
    })
}
*/
// const cards = document.getElementsByClassName('back_card');

// This adds an event listener to all cards in the DB. To check later on whether a card has been flipped or not. 

/*function flipCard(element){

    

  //  console.log(element.dataset.attribute)
    if(counter === 2){
      //  setTimeout(() => {
        //    console.log('Reset cards')
       // }, 2000)
        return;
    } 
    element.classList.toggle('flip');
    console.log("FlipCard works!!");
    console.log(counter);

    counter++;
}


var counter = 0;

*/
