//Henrik: game class, next turn var, p1 or p2 update on turns,

// Connect indiScore to statsP1 and statsP2 from game class at some point. 
class Player {
    constructor(playerName,indiScore, indiMiss){
        this.playerName = playerName;
        this.indiScore = indiScore; // individual Score
        this.indiMiss = indiMiss; // individual missmatches

    }
}

var players = [];

// Safes player names to local Storage. 
const savePlayerNames = () => {
    localStorage.setItem('player', JSON.stringify(players))
}
// Loads player names from local Storage. 
const loadPlayerNames = () => {
    users = JSON.parse(localStorage.getItem('player'))
}

const submitBtnUI = document.getElementById('submit-btn')
// const submitBtnUI2 = document.getElementById('submit-btn2')
const playerName1UI = document.getElementById('playerName1')
const playerName2UI = document.getElementById('playerName2')

submitBtnUI.onclick = function () {

    // console.log('clicked')
    var playerName = playerName1UI.value;
    //var name2 = playerName2UI.value;
    var firstPlayer = new Player(playerName1UI.value);
    indiScore = 2000;
    scoreCountP1 = 10;
    firstPlayer.indiScore = scoreCountP1;
    
    players.push(new Player(playerName, indiScore));

    playerName = playerName2UI.value;
    //var name2 = playerName2UI.value;
    var secondPlayer = new Player(playerName2UI.value);
    indiScore = 200000;
    scoreCountP2 = 20;
    secondPlayer.indiScore = scoreCountP2;
    
    players.push(new Player(playerName, indiScore));
    console.log(players);
    savePlayerNames();
    loadPlayerNames();
    
    

    console.log('this is firstPLayers indiScore ' + firstPlayer.indiScore);
    
window.location.href = "./memory_board.html";
}

// submitBtnUI2.onclick = function () {

//     // console.log('clicked')
//     var playerName = playerName2UI.value;
//     //var name2 = playerName2UI.value;
    
//     players.push(new Player(playerName));
//     console.log(players);
//     savePlayerNames();
//     loadPlayerNames();
//     window.location.href = "./memory_board.html";

// }

// players.indiScore = scoreCountP1

// playerName1UI.value 

// const test = () => {
// console.log("This is scoreCountP1 in player_class.js " + scoreCountP1)
// console.log("players indiScore is: " + players.indiScore)

// }
// test();