class Game {
    constructor(winner,totalGameTime, totalTurns,totalMiss, statsP1, statsP2){
        this._winner = winner;
        this.totalGameTime = totalGameTime;
        this.totalTurns = totalTurns;
        this.totalMiss = totalMiss;
        this.statsP1 = statsP1; // displays P1's score and stats
        this.statsP2 = statsP2; // these will be computed with game overall stats and indiPlayerStats
    } 
    
    // set victory(winner) {
    //  return this._winner = winner;
    // }

    initializeGame() {
        cardsArray.forEach(function(cardInput){
            
            // onclick="flipCard(this)"
            var html = `<div class="back_card" data-id="Math.random()" data-attribute="${cardInput.name}">
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
        console.log(_this);
        console.log(firstCard)
        console.log(_this == firstCard, _this === firstCard)
        if (!firstCard){
            cardHasFlipped = true;
            firstCard = _this;
            _this.parentElement.classList.add('flip');
            //console.log(firstCard);
            //console.log("this is the first card" + firstCard.parentElement.dataset.attribute);
        } else if (!secondCard && _this!==firstCard) {
            secondCard = _this;
            _this.parentElement.classList.add('flip');
            //console.log("this is the second card" + secondCard.parentElement.dataset.attribute);
            this.checkForMatch();
            this.checkGameProgress();
            this.makeScoreVisInHtml();
        }
    //If it is a match, disable both cards (remove eventlisteners);
    }

    checkForMatch() {
        if (firstCard.parentElement.dataset.attribute === secondCard.parentElement.dataset.attribute) { 
            this.disableCards();
            totalScore++;
            totalCount = totalScore + totalMiss;
            console.log(totalCount);
        
            if (totalCount % 2 == 0){
                scoreCountP1++;
            
            console.log('this is the score of player 1 '+ scoreCountP1);}
            //console.log("match, cards have been disabled due to match.");
            console.log("totalScore is: " + totalScore);
            
            if (totalCount % 2 !== 0){
                scoreCountP2++
                console.log('This is the score of player 2 '+scoreCountP2)
            }
           return;
            } else { 
            //missCountP1++;
            totalMiss++;
            this.unflipCards();
            // console.log("misscountp1= " + missCountP1);
            console.log("totalMisscount is: " + totalMiss);
            }
            totalCount = totalScore + totalMiss;
            console.log('This is the total count: '+ totalCount);
            }
            //this.determinePoints();

    disableCards() {

        firstCard.parentElement.removeEventListener('click', this.flipCard);
        secondCard.parentElement.removeEventListener('click', this.flipCard);
        
        //console.log("disableCards - cards are disabled now");
    
        this.resetBoard();
        
        //console.log("disableCards - Board has been reset");
    }
        
    unflipCards() {

        lockBoard = true;
    
            setTimeout(() => {
                firstCard.parentElement.classList.remove('flip');
                secondCard.parentElement.classList.remove('flip');
    
                this.resetBoard();
            }, 1500);
            //console.log("cards have been unflipped");
        }

//This function resets the card variables so that we can keep playing.
//This function needs to be used by disbleCards and unflipCards.
    resetBoard() {
    
    cardHasFlipped = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null; 
    
    //console.log("board successfully reset")
    }

    checkGameProgress() {
        if (scoreCountP1 + scoreCountP2 == 18) {
        alert('Congratulations, you guys finished the Game. ' + 'Scores are ' + 
        'Player1: ' + scoreCountP1 + 'Player2: ' + scoreCountP2)
        }
    }
    makeScoreVisInHtml() {
        var p1Score = scoreCountP1;
        var p2Score = scoreCountP2;
        //var p1Miss = missCountP1;
        //var p2Miss = missCountP2;
        document.getElementById('P1Html').innerHTML = p1Score;
        document.getElementById('P2Html').innerHTML = p2Score;
        //document.getElementById('P1Miss').innerHTML = p1Miss;
        //document.getElementById('P2Miss').innerHTML = p2Miss;
    }

}