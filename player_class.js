//Henrik: game class, next turn var, p1 or p2 update on turns,

// Connect indiScore to statsP1 and statsP2 from game class at some point. 
class Player {
    constructor(playerName,indiScore, indiMiss){
        this.playerName = playerName;
        this.indiScore = indiScore; // individual Score
        this.indiMiss = indiMiss; // individual missmatches

    }
    // setPlayerScore() {
    //     firstPlayer.indiScore = scoreCountP1
    //     secondPlayer.indiScore = scoreCountP2
    // }
} 
// Player.setPlayerScore();
// console.log(Player.setPlayerScore + "this is the setPlayerScore in the player_class method.");

var players = [];
//Access this array within the game class and then to the player class. 
// Safes player names to local Storage. 
const savePlayerNames = () => {
    localStorage.setItem('player', JSON.stringify(players))
}
// Loads player names from local Storage. 
const loadPlayerNames = () => {
    users = JSON.parse(localStorage.getItem('player'))
}

const submitBtnUI = document.getElementById('submit-btn')
const playerName1UI = document.getElementById('playerName1')
const playerName2UI = document.getElementById('playerName2')

//On click, safe players inserted names and push them to the players array + safe to localStorage.
submitBtnUI.onclick = function () {

    var playerName = playerName1UI.value;
    
    var firstPlayer = new Player(playerName1UI.value);
    console.log(firstPlayer)
    // indiScore = 2000;
    // scoreCountP1 = 10;
    // firstPlayer.indiScore = scoreCountP1;
    
    players.push(new Player(playerName, 0, 0));

    playerName = playerName2UI.value;
    //var name2 = playerName2UI.value;
    var secondPlayer = new Player(playerName2UI.value);
    console.log(secondPlayer);
    // indiScore = 200000;
    // scoreCountP2 = 20;
    // secondPlayer.indiScore = scoreCountP2;
  
    
    players.push(new Player(playerName, 0, 0));
    
    savePlayerNames();
    loadPlayerNames();
    
window.location.href = "./memory_board.html";
}

