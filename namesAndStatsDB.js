// we will use local storage to safe players names and game results here. 

//Henrik: change this class 
class User {
    constructor(name1, name2){
        this.name1 = name1;
        this.name2 = name2; 
    }
}

//Henrik: game class, next turn var, p1 or p2 update on turns,

var users = [];


const submitBtnUI = document.getElementById('submit-btn')
const playerName1UI = document.getElementById('playerName1')
const playerName2UI = document.getElementById('playerName2')

submitBtnUI.onclick = function () {

    // console.log('clicked')
    var name1 = playerName1UI.value;
    var name2 = playerName2UI.value;
    
    users.push(new User(name1, name2));
    console.log(users);
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


// Safes player names to local Storage. 
const savePlayerNames = () => {
    localStorage.setItem('player', JSON.stringify(users))
}
// Loads player names from local Storage. 
const loadPlayerNames = () => {
    users = JSON.parse(localStorage.getItem('player'))
}

