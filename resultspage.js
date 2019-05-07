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