// we will use local storage to safe players names and game results here. 

class User {
    constructor(name1, name2){
        this.name1 = name1;
        this.name2 = name2; 
    }
}
// One hard coded user pair for testing purpose. 
var users = [new User("Michele", "Lasse")];
//console.log(users);

const submitBtnUI = document.getElementById('submit-btn')
const playerName1UI = document.getElementById('playerName1')
const playerName2UI = document.getElementById('playerName2')

submitBtnUI.onclick = function () {

    console.log('clicked')
    var name1 = playerName1UI.value;
    var name2 = playerName2UI.value;
    
    //to store the new names we add it to the users Array. 
    users.push(new User(name1, name2));
   
    console.log(users);

    window.localStorage.setItem("player", JSON.stringify(User));
    //syntaxError with the JSON parse line of code.  ---------- HIER WEITER !!!
    //JSON.parse(window.localStorage.getItem("player"));

    if (typeof(Storage) !== "undefined") {
        // Code for localStorage
    
    } else {
        // No web storage Support.
    
    }
    
    // To store the user I add him to the array of users (DB)
    
    //redirect to game board here needed. 
    }
    

    
    