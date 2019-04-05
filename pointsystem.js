//This file contains our pointsystem with the logic.

//global variables.
var turn;
var turnRandom = Math.random();
// var turnTerminator = 0;
/*WE NEED TO FIND A WAY TO BREAK THE MAKEFIRST TURN FCT BREAK AFTER 1 USE.
Because after the first turn the turns are assigned differently. */
const makeFirstTurnRandom = () => {
 // p1 starts if false, if true p2
if (turnRandom < 0.5) {
    turn = true; 
    // turnTerminator++;  
} else { 
    turn = false; 
    // turnTerminator++;
    // if (turnTerminator == 1) {
    //     return;
    // }
}
console.log(turn)
}
makeFirstTurnRandom();

const assignPlayerToTurnAndCount = () => {
    if (turn = true) {
        console.log("It's player 1's turn")
        //Actually we have to do the logic in the functions.js because firstCards scope is limited inside another fct.
        if (firstCard.dataset.attribute === secondCard.dataset.attribute) {
            scoreCountP1 ++;
            console.log(scoreCountP1);
        }

    } else {
        console.log("It's player 2's turn")
        if (firstCard.dataset.attribute === secondCard.dataset.attribute) {
            scoreCountP2 ++;
            console.log(scoreCountP2);
        }
    }
}
assignPlayerToTurnAndCount();