var playersNames = JSON.parse(localStorage.getItem("playersUpdated"));
document.getElementById('player1Name').innerHTML = playersNames[0].playerName
document.getElementById('player2Name').innerHTML = playersNames[1].playerName
document.getElementById('player1Score').innerHTML = playersNames[0].indiScore
document.getElementById('player2Score').innerHTML = playersNames[1].indiScore
document.getElementById('player1Miss').innerHTML = playersNames[0].indiMiss
document.getElementById('player2Miss').innerHTML = playersNames[1].indiMiss

let playAgain = document.getElementById('playAgain-btn')

playAgain.onclick = function () {
    window.location.href = "./memory_board.html";
}

const calcPlayersAccuracy = () => {
    let accurP1 = Math.round(playersNames[0].indiScore / (playersNames[0].indiScore + playersNames[0].indiMiss)*100)+'%'
    let accurP2 = Math.round(playersNames[1].indiScore / (playersNames[1].indiScore + playersNames[1].indiMiss)*100)+'%'
    document.getElementById('player1Accuracy').innerHTML = accurP1;
    document.getElementById('player2Accuracy').innerHTML = accurP2;
}
calcPlayersAccuracy()



