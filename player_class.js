 class Player {
    constructor(playerName,indiScore, indiMiss){
        this.playerName = playerName;
        this.indiScore = indiScore; // individual Score
        this.indiMiss = indiMiss; // individual missmatches

    }
} 

var players = [];

// Saves player names to local Storage. 
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

//On click, save players inserted names and push them to the players array + save to localStorage.
submitBtnUI.onclick = function () {

    var playerName = playerName1UI.value;
    
    var firstPlayer = new Player(playerName1UI.value);
    console.log(firstPlayer);
    
    players.push(new Player(playerName, 0, 0));

    playerName = playerName2UI.value;
    
    var secondPlayer = new Player(playerName2UI.value);
    console.log(secondPlayer);
    
    players.push(new Player(playerName, 0, 0));
    
    savePlayerNames();
    loadPlayerNames();
    
window.location.href = "./memory_board.html";
}

