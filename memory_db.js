var cardsDb = [{
    name: "trump",
    img: "img/trump.jpg",
},   
{   name: "trump",
    img: "img/maga.jpg",
}, 
{
    name: "Merkel",
    img: "img/angela.jpg", 
},    
{    
    name: "Merkel",
    img: "img/cdu.jpg",
}, 
{
    name: "Brian",
    img: "img/brian.jpg", 
},
{   name: "Brian",
    img: "img/badluck.jpg",
}, 
{
    name: "Einstein",
    img: "img/einstein.jpg", 
},
{    
    name: "Einstein",
    img: "img/einsteine.png",  
}, 
{
    name: "Messi",
    img: "img/messi.jpg",
},
{
    name: "Messi",
    img: "img/goat.png",  
}, 
{
    name: "Fyre",
    img: "img/tile.jpg", 
},
{
    name: "Fyre",
    img: "img/tilematch.png",
}, 
{
    name: "CocoChanel",
    img: "img/coco_chanel.jpg", 
},    
{   name: "CocoChanel", 
    img: "img/text_coco_chanel.jpg",
}, 
{
    name: "KanyeWest",
    img: "img/kanye_west.jpg", 
},
{
    name: "KanyeWest",
    img: "img/text_kanye_west.jpg",
}, 
{
    name: "TonyRobbins",
    img: "img/tony_robbins.jpeg",
},
{ 
    name: "TonyRobbins",
    img: "img/text_tony_robbins.jpg",
     
}, {
    name: "Aristotle",
    img: "img/aristotle.jpg", 
},
{
    name: "Aristotle",
    img: "img/text_aristotle.jpg",
}, 
{
    name: "Cesar",
    img: "img/julio-cesar.jpg", 
},
{   
    name: "Cesar",
    img: "img/text_julius_cesar.jpg",
}, 
{
    name: "TheresaMay",
    img: "img/theresa_may.jpg",
},{
    name: "TheresaMay",
    img: "img/text_theresa_may.jpg", 
}, 
{
    name: "SherylSandberg",
    img: "img/sherly_sandberg.jpg",
},
{ 
    name: "SherylSandberg",
    img: "img/text_sherly_sandberg.jpg", 
}, 
{
    name: "Chopra",
    img: "img/Chopra.jpg",
},
{ 
    name: "Chopra",
    img: "img/text_chopra.jpg", 
}, 
{
    name: "Andretti",
    img: "img/andretti.jpg", 
},
{
    name: "Andretti",
    img: "img/text_andretti.jpg",
}, 
{
    name: "Jobs",
    img: "img/jobs.png", 
},
{    
    name: "Jobs",
    img: "img/text_jobs.jpg", 
}, 
{
    name: "Obama",
    img: "img/barack.png", 
},
{   
    name: "Obama",
    img: "img/text_obama.png",
},
{
    name: "Macron",
    img: "img/macron.jpg", 
},
{   
    name: "Macron",
    img: "img/text_macron.png", 
}];

cardsDb.forEach(function(element) {

    //cardsDb.front_face = "img/cbs.png";
    element.front_face = "img/cbs.png";
    
});

// This is the section, that randomizes the memory cards on the board. 
const randomArray=[];


function shuffle(cardsDb) {
    var currentIndex = cardsDb.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = cardsDb[currentIndex];
      cardsDb[currentIndex] = cardsDb[randomIndex];
      cardsDb[randomIndex] = temporaryValue;
    }
  
    return cardsDb;
  }
  
  // Create a function to flip the picture on the game //
  
  // var cardsDb = cardsDb;
  
  // Shuffle cardsDb "elements"
  
  cardsDb = shuffle(cardsDb);
  
