//This is our DB for our cards. 
//Below there is also the function for shuffling.

class card {
    constructor(name, img){
    this._name = name;
    this.img = img;
    this.backimg = "img/cbs.png";
    }
    get name() {
        return this._name;
    }
}

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
var fyre2 = new card("fyre", "img/fyrefestival.jpg")
var coco = new card("coco", "img/coco_chanel.jpg")
var coco2 = new card("coco", "img/text_coco_chanel.jpg")
var uber = new card("uber", "img/uber.jpeg")
var uber2 = new card("uber2", "img/uber2.jpeg")
var ebay = new card("ebay", "img/ebay.jpeg")
var ebay2 = new card("ebay", "img/ebay2.png")
var alibaba = new card("alibaba", "img/alibaba.jpg")
var alibaba2 = new card("alibaba", "img/alibaba2.jpg")
var facebook = new card("facebook", "img/facebook.jpg")
var facebook2 = new card("facebook", "img/facebook2.jpg")
var amazon = new card("amazon", "img/amazon.jpeg")
var amazon2 = new card("amazon", "img/amazon2.png")
var adobe = new card("adobe", "img/adobe.png")
var adobe2 = new card("adobe2", "img/adobe2.png")
var mastercard = new card("mastercard", "img/mastercard.png")
var mastercard2 = new card("mastercard", "img/mastercard2.jpeg")
var samsung = new card("samsung", "img/samsung.jpeg")
var samsung2 = new card("samsung", "img/samsung2.jpg")
var jobs = new card("jobs", "img/jobs.png")
var jobs2 = new card("jobs", "img/text_jobs.jpg")
var obama = new card("obama", "img/barack.png")
var obama2 = new card("obama", "img/barack2.jpg")
var intel = new card("intel", "img/intel.jpeg")
var intel2 = new card("intel", "img/intel2.png")


// This is our Database for the cards. 
var cardsArray = [trump,trump2,merkel,merkel2,brian,brian2,einstein,einstein2,messi,messi2,fyre,fyre2,coco,coco2,kanye,kanye2,
    ebay,tonyrobtle,aristotle2,facebook,cesar2,amazon$,2,sherylSaamazon$ndberg,sherylSandberg2,
    chopra,chopra2,samsung,samsung2,jobs,jobs2,obama,obama2,intel,intel2]

   


// This is the section, that randomizes the memory cards on the board. 

function shuffle() { 
  cardsArray.sort(() => Math.random() - 0.5); 
} 
shuffle();

//lets make this a method of the card class and call it on the card class with card.shuffle