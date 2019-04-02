//this will only run, when the page is loaded.
document.addEventListener('DOMContentLoaded', initializeGame, false);
function initializeGame() {
      cardsArray.forEach(function(cardInput){
          
  
          var html = `<div onclick="flipCard(this)" class="back_card" data-attribute="${cardInput.name}">
                          <img class="img1" src="${cardInput.img}">
                          <img class="img2" src="${cardInput.backimg}">
                      </div>`;
  
          var container = document.getElementById('cards-wrapper')
          container.insertAdjacentHTML('afterbegin', html); //this copies the html element and inserts it afterbegin, the copy is the html var
      })
  }

var hasFlippedCard = false;
var firstCard; 
var secondCard;
  
function flipCard(element){
    /*if(counter === 3){
       counter = 1;
       console.log("reset counter" + counter);
       return
    } */
    
    if(counter === 1){
      firstCard = element.dataset.attribute;
      console.log('firstCard is this'+ firstCard);
      element.classList.toggle('flip');
      counter++;
      console.log("counter is at firstCard: " + counter);
    } 
    else if(counter === 2 || counter === 3){
      secondCard = element.dataset.attribute;
      console.log('secondCard is this'+ secondCard);
      element.classList.toggle('flip');
      counter++;
      console.log("counter is with secondC:" + counter);
      
      if(firstCard==secondCard){
        counter = 1;
        console.log("match");
        //element.classList.remove('flip');
        console.log("counter at match is=" + counter)
      }
    }


    //checkForMatch();
}   

/*function checkForMatch() {
  if(firstCard.dataset.attribute === secondCard.dataset.attribute){
    disableCards();
    return;
  }
  unflipCards();
}*/

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

  }, 1500)
}


class card {
    constructor(name, img){
    this.name = name;
    this.img = img;
    this.backimg = "img/cbs.png";
}}

var counter = 1;
const cards = document.getElementsByClassName('back_card');
//card.forEach( card => card.addEventListener('click', flipCard))

 

var trump = new card("trump", "img/trump.jpg")
var trump2 = new card("trump", "img/maga.jpg")
var merkel = new card("merkel", "img/angela.jpg")
var merkel2 = new card("merkel", "img/cdu.jpg")
var brian = new card("brian", "img/brian.jpg")
var brian2 = new card("brian", "img/badluck.jpg")
var einstein = new card("einstein", "img/einstein.jpg")
var einstein2 = new card("einstein", "img/einsteine.png")
var messi = new card("messi", "img/messi.jpg")
var messi2 = new card("messi", "img/goat.png")
var fyre = new card("fyre", "img/tile.jpg")
var fyre2 = new card("fyre", "img/tilematch.png")
var coco = new card("coco", "img/coco_chanel.jpg")
var coco2 = new card("coco", "img/text_coco_chanel.jpg")
var kanye = new card("kanye", "img/kanye_west.jpg")
var kanye2 = new card("kanye", "img/text_kanye_west.jpg")
var tonyrobbins = new card("tonyrobbins", "img/tony_robbins.jpeg")
var tonyrobbins2 = new card("tonyrobbins", "img/text_tony_robbins.jpg")
var aristotle = new card("aristotle", "img/aristotle.jpg")
var aristotle2 = new card("aristotle", "img/text_aristotle.jpg")
var cesar = new card("cesar", "img/julio-cesar.jpg")
var cesar2 = new card("cesar", "img/text_julius_cesar.jpg")
var theresaMay = new card("theresamay", "img/theresa_may.jpg")
var theresaMay2 = new card("theresamay", "img/text_theresa_may.jpg")
var sherylSandberg = new card("sherylsandberg", "img/sherly_sandberg.jpg")
var sherylSandberg2 = new card("sherylsandberg", "img/text_sherly_sandberg.jpg")
var chopra = new card("chopra", "img/Chopra.jpg")
var chopra2 = new card("chopra", "img/text_chopra.jpg")
var andretti = new card("andretti", "img/andretti.jpg")
var andretti2 = new card("andretti", "img/text_andretti.jpg")
var jobs = new card("jobs", "img/jobs.png")
var jobs2 = new card("jobs", "img/text_jobs.jpg")
var obama = new card("obama", "img/barack.png")
var obama2 = new card("obama", "img/text_obama.png")
var macron = new card("macron", "img/macron.jpg")
var macron2 = new card("macron", "img/text_macron.png")


// This is our Database for the cards. 
var cardsArray = [trump,trump2,merkel,merkel2,brian,brian2,einstein,einstein2,messi,messi2,fyre,fyre2,coco,coco2,kanye,kanye2,
    tonyrobbins,tonyrobbins2,aristotle,aristotle2,cesar,cesar2,theresaMay,theresaMay2,sherylSandberg,sherylSandberg2,
    chopra,chopra2,andretti,andretti2,jobs,jobs2,obama,obama2,macron,macron2]

    //cardsArray.addEventListener('click', flipCard);


// This is the section, that randomizes the memory cards on the board. 
// var randomArray = [];
// randomArray.push(cardsArray)
// console.log(randomArray);
function shuffle() { 
  cardsArray.sort(() => Math.random() - 0.5); 
} 
  shuffle();




