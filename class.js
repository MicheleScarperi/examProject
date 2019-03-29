//this will only run, when the page is loaded.
document.addEventListener('DOMContentLoaded', initializeGame, false);
function initializeGame() {
    //  var html = '' MARTEN
      cardsArray.forEach(function(cardInput){
          
      // html += cardInput.createHTML()
          
  
          var html = `<div onclick="flipCard(this)" class="back_card" data-attribute="${cardInput.name}">
                          <img id="${cardInput.name}" class="img1" src="${cardInput.img}" style="height:110;width:110;opacity: 0.5;">
                          <img class="img2" src="${cardInput.backimg}" style="height:110;width:110;">
                      </div>`;
  
          var container = document.getElementById('cards-wrapper')
          container.insertAdjacentHTML('afterbegin', html); //this copies the html element and inserts it afterbegin, the copy is the html var
      })
  }
  function flipCard(element){
    if(counter === 2){
        return;
    } 
    element.classList.toggle('flip');
    counter++;
}      

class card {
    constructor(name, img){
    this.name = name;
    this.img = img;
    this.backimg = "img/cbs.png";
}}

var counter = 0;
const cards = document.getElementsByClassName('back_card');

var trump = new card("trump", "img/trump.jpg")
var trump2 = new card("trump", "img/maga.jpg")
var merkel = new card("merkel", "img/angela.jpg")
var merkel2 = new card("merkel", "img/cdu.jpg")
var brian = new card("brian", "img/brian.jpg")
var brian2 = new card("brian", "img/badluck.jpg")
var einstein = new card("einstein", "img/einstein.jpg")
var einstein2 = new card("einstein", "img/einsteine.png")

var cardsArray = [trump,trump2,merkel,merkel2,brian,brian2,einstein,einstein2]

console.log(cardsArray)
