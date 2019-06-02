//Global variables.
var cardHasFlipped = false;
var firstCard;
var secondCard;
var lockBoard = false;
var scoreCountP1 = 0;
var missCountP1 = 0;
var scoreCountP2 = 0;
var missCountP2 = 0;
var totalMiss = 0;
var totalScore = 0;
var totalCount = 0;

class Game {

    //Creates the HTML dynamically and makes player names visible on the board. 
    initializeGame() {
        cardsArray.forEach(function (cardInput) {

            var html = `<div class="back_card" data-id="${Math.random()}" data-attribute="${cardInput.name}">
            <img class="img1" src="${cardInput.img}">
            <img class="img2" src="${cardInput.backimg}">
            </div>`;

            var container = document.getElementById('cards-wrapper')
            container.insertAdjacentHTML('afterbegin', html); //this copies the html element and inserts it afterbegin, the copy is the html var
        });

        //This makes the inserted Player names visible on the Game Board. 
        var playersNames = JSON.parse(localStorage.getItem("player"));
        document.getElementById('playerName1').innerHTML = playersNames[0].playerName;
        document.getElementById('playerName2').innerHTML = playersNames[1].playerName;
    }

    flipCard(event) {

        var _this = event.target;

        if (!firstCard) {
            cardHasFlipped = true;
            firstCard = _this;
            _this.parentElement.classList.add('flip');

        } else if (!secondCard && firstCard.parentElement.dataset.id !== _this.parentElement.dataset.id) {
            secondCard = _this;
            _this.parentElement.classList.add('flip');

            this.checkForMatch();
            this.checkGameProgress();
            this.makeScoreVisInHtml();
            this.playerTurn();
        }
    }

    checkForMatch() {

        totalCount = totalScore + totalMiss;
        if (firstCard.parentElement.dataset.attribute === secondCard.parentElement.dataset.attribute) {
            setTimeout(() => {
                this.disableCards();
            }, 1500)
            totalScore++;


            if (totalCount % 2 == 0) {
                scoreCountP1++;

            }

            if (totalCount % 2 !== 0) {
                scoreCountP2++

            }
            return;

        } else if (firstCard.parentElement.dataset.attribute !== secondCard.parentElement.dataset.attribute && totalCount % 2 == 0) {
            missCountP1++;
            totalMiss++;
            this.unflipCards();

        } else if (firstCard.parentElement.dataset.attribute !== secondCard.parentElement.dataset.attribute && totalCount % 2 !== 0) {
            missCountP2++;
            totalMiss++;
            this.unflipCards();

        }
    }

    disableCards() {
        firstCard.parentElement.classList.add('matched')
        secondCard.parentElement.classList.add('matched')

        firstCard.parentElement.removeEventListener('click', this.flipCard);
        secondCard.parentElement.removeEventListener('click', this.flipCard);

        this.resetBoard();

    }

    unflipCards() {

        lockBoard = true;

        setTimeout(() => {
            firstCard.parentElement.classList.remove('flip');
            secondCard.parentElement.classList.remove('flip');

            this.resetBoard();
        }, 1500);

    }

    //This function resets the card variables so that we can keep playing.

    resetBoard() {

        cardHasFlipped = false;
        lockBoard = false;
        firstCard = null;
        secondCard = null;

    }

    checkGameProgress() {

        var playersNames = JSON.parse(localStorage.getItem("player"));

        if (scoreCountP1 + scoreCountP2 == 18) {
            window.location.assign("resultsPage.html")
        }

        playersNames[0].indiScore = scoreCountP1;
        playersNames[1].indiScore = scoreCountP2;

        playersNames[0].indiMiss = missCountP1;
        playersNames[1].indiMiss = missCountP2;

        localStorage.setItem('playersUpdated', JSON.stringify(playersNames))

    }

    makeScoreVisInHtml() {
        var p1Score = scoreCountP1;
        var p2Score = scoreCountP2;

        document.getElementById('P1Html').innerHTML = p1Score;
        document.getElementById('P2Html').innerHTML = p2Score;

    }

    playerTurn() {

        const yourTurn = "It's your turn!"
        if (totalCount % 2 == 0) {
            document.getElementById('player1turn').innerHTML = '';
            document.getElementById('player2turn').innerHTML = yourTurn;
        } else {
            document.getElementById('player2turn').innerHTML = '';
            document.getElementById('player1turn').innerHTML = yourTurn;
        }
    }
}