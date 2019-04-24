//Henrik: game class, next turn var, p1 or p2 update on turns,

// Connect indiScore to statsP1 and statsP2 from game class at some point. 
class Player {
    constructor(playerName,indiScore, indiMiss){
        this._playerName = playerName;
        this._indiScore = indiScore; // individual Score
        this._indiMiss = indiMiss; // individual missmatches
    
//     } get individualScore() {
//         return this._indiScore;
    
//     } get individualMiss() {
//         return this._indiMiss;

//     } get playerName() {
//         return this._playerName;

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
const playerName1UI = document.getElementById('playerName1')
const playerName2UI = document.getElementById('playerName2')

submitBtnUI.onclick = function () {

    // console.log('clicked')
    var playerName = playerName1UI.value;
    //var name2 = playerName2UI.value;
    
    players.push(new Player(playerName, indiScore, indiMiss));
    console.log(players);
    savePlayerNames();
    loadPlayerNames();
    window.location.href = "./memory_board.html";
    
    /*// Doesn't work to check whether user/player already exists. Will always fire the alert on click.
    if(!name1 || name2 === users) {
        users.push(new User(name1, name2));
        savePlayerNames();
        loadPlayerNames();
        
    } else if(name1 || name2 === users ) {
            alert('Please choose different player names. The player names you chose already exist.') 

        }*/
}


