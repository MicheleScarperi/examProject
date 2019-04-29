//This is our DB for our cards. 
//Below there is also the function for shuffling.

class card {
    constructor(name, img){
    this._name = name;
    this.img = img;
    this.backimg = "img/cbs.png";
    }
}

var trump = new card("trump", "img/trump.jpg")
var trump2 = new card("trump", "img/trump2.jpg")
var netflix = new card("netflix", "img/netflix.jpg")
var netflix2 = new card("netflix", "img/netflix2.jpg")
var brian = new card("brian", "img/brian.jpg")
var brian2 = new card("brian", "img/badluck.jpg")
var einstein = new card("einstein", "img/einstein.jpg")
var einstein2 = new card("einstein", "img/einstein2.png")
var playstation = new card("playstation", "img/playstation.jpg")
var playstation2 = new card("playstation", "img/playstation2.png")
var airbnb = new card("airbnb", "img/airbnb.png")
var airbnb2 = new card("airbnb", "img/airbnb2.jpg")
var hoover = new card("hoover", "img/hoover.jpg")
var hoover2 = new card("hoover", "img/hoover2.jpg")
var uber = new card("uber", "img/uber.jpeg")
var uber2 = new card("uber", "img/uber2.jpeg")
var ebay = new card("ebay", "img/ebay.jpg")
var ebay2 = new card("ebay", "img/ebay2.png")
var alibaba = new card("alibaba", "img/alibaba.jpg")
var alibaba2 = new card("alibaba", "img/alibaba2.jpg")
var facebook = new card("facebook", "img/facebook.jpeg")
var facebook2 = new card("facebook", "img/facebook2.jpg")
var amazon = new card("amazon", "img/amazon.png")
var amazon2 = new card("amazon", "img/amazon2.jpeg")
var adobe = new card("adobe", "img/adobe.png")
var adobe2 = new card("adobe", "img/adobe2.png")
var mastercard = new card("mastercard", "img/mastercard.png")
var mastercard2 = new card("mastercard", "img/mastercard2.jpeg")
var samsung = new card("samsung", "img/samsung.jpeg")
var samsung2 = new card("samsung", "img/samsung2.jpg")
var jobs = new card("jobs", "img/jobs.png")
var jobs2 = new card("jobs", "img/text_jobs.jpg")
var obama = new card("obama", "img/barack.png")
var obama2 = new card("obama", "img/barack2.jpg")
var intel = new card("intel", "img/intel.jpeg")
var intel2 = new card("intel", "img/intel2.jpg")


// This is our Database for the cards. 
var cardsArray = [trump,trump2,netflix,netflix2,brian,brian2,einstein,einstein2,playstation,playstation2,airbnb,airbnb2,hoover,hoover2,uber,uber2,
    ebay,ebay2,alibaba, alibaba2,facebook,facebook2,amazon,amazon2,adobe,adobe2, mastercard,
    mastercard2,samsung,samsung2,jobs,jobs2,obama,obama2,intel,intel2]


// This is the section, that randomizes the memory cards on the board. 
function shuffle() { 
  cardsArray.sort(() => Math.random() - 0.5); 
} 
shuffle();
