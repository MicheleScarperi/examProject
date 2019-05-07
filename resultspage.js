var playersNames = JSON.parse(localStorage.getItem("playersUpdated"));
document.getElementById('player1Name').innerHTML = playersNames[0].playerName;
document.getElementById('player2Name').innerHTML = playersNames[1].playerName;
document.getElementById('player1Score').innerHTML = playersNames[0].indiScore;
document.getElementById('player2Score').innerHTML = playersNames[1].indiScore;
document.getElementById('player1Miss').innerHTML = playersNames[0].indiMiss;
document.getElementById('player2Miss').innerHTML = playersNames[1].indiMiss;

let playAgain = document.getElementById('playAgain-btn')

playAgain.onclick = function () {
    window.location.href = "./memory_board.html";
}

const calcPlayersAccuracy = () => {
    let accurP1 = scoreCountP1 / (scoreCountP1 + missCountP1)
    let accurP2 = scoreCountP2 / (scoreCountP2 + missCountP2)
    return accurP1, accurP2
}

accurP1 = document.getElementById('player1Accuracy').innerHTML;
accurP2 = document.getElementById('player2Accuracy').innerHTML;

