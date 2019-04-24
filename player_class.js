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
const submitBtnUI2 = document.getElementById('submit-btn2')
const playerName1UI = document.getElementById('playerName1')
const playerName2UI = document.getElementById('playerName2')

submitBtnUI.onclick = function () {

    // console.log('clicked')
    var playerName = playerName1UI.value;
    //var name2 = playerName2UI.value;
    
    players.push(new Player(playerName));
    console.log(players);
    savePlayerNames();
    loadPlayerNames();

}

submitBtnUI2.onclick = function () {

    // console.log('clicked')
    var playerName = playerName2UI.value;
    //var name2 = playerName2UI.value;
    
    players.push(new Player(playerName));
    console.log(players);
    savePlayerNames();
    loadPlayerNames();
    window.location.href = "./memory_board.html";

}

