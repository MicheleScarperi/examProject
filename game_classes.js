// class User {
//     constructor(firstName, lastName, userName, password, organisation){
//         this.firstName = firstName;
//         this.lastName = lastName
//         this.userName = userName;
//         this.password = password;
//         this.organisation = organisation;
//     }
// }

//Henrik: game class, next turn var, p1 or p2 update on turns,
// class Player {
//     constructor(playerName,indiScore, indiMiss, turn){
//         this._playerName = playerName;
//         this._indiScore = indiScore; // individual Score
//         this._indiMiss = indiMiss; // individual missmatches
//         this._turn = turn;
    
//     } get individualScore() {
//         return this._indiScore;
    
//     } get individualMiss() {
//         return this._indiMiss;
    
//     } get turn() {
//         return this._turn;

//     } get playerName() {
//         return this._playerName;

//     }
// }

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
            var html = `<div class="back_card" data-attribute="${cardInput.name}">
            <img class="img1" src="${cardInput.img}">
            <img class="img2" src="${cardInput.backimg}">
            </div>`;
            
            var container = document.getElementById('cards-wrapper')
            container.insertAdjacentHTML('afterbegin', html); //this copies the html element and inserts it afterbegin, the copy is the html var
        });
    }

    flipCard(event) {
        var _this = event.target;

        _this.parentElement.classList.add('flip');
    
        if (!cardHasFlipped){
            cardHasFlipped = true;
            firstCard = _this;
            console.log(firstCard);
            console.log("this is the first card" + firstCard.parentElement.dataset.attribute);
        } else {
            secondCard = _this;
            console.log("this is the second card" + secondCard.parentElement.dataset.attribute);
            this.checkForMatch();
            this.checkGameProgress();
        }
    //If it is a match, disable both cards (remove eventlisteners);
    }

    checkForMatch() {
        if (firstCard.parentElement.dataset.attribute === secondCard.parentElement.dataset.attribute) { 
            this.disableCards();
            totalScore++;
            console.log("match, cards have been disabled due to match.");
            console.log("totalScore is: " + totalScore);
           return;
            } else { 
            // missCountP1++;
            totalMiss++;
            this.unflipCards();
            // console.log("misscountp1= " + missCountP1);
            console.log("totalMisscount is: " + totalMiss);
            }
            this.determinePoints();
            
        }

    disableCards() {

        firstCard.parentElement.removeEventListener('click', this.flipCard);
        secondCard.parentElement.removeEventListener('click', this.flipCard);
        
        console.log("disableCards - cards are disabled now");
    
        this.resetBoard();
        
        console.log("disableCards - Board has been reset");
    }
        
    unflipCards() {

        lockBoard = true;
    
            setTimeout(() => {
                firstCard.parentElement.classList.remove('flip');
                secondCard.parentElement.classList.remove('flip');
    
                this.resetBoard();
            }, 1500);
            console.log("cards have been unflipped");
        }

//This function resets the card variables so that we can keep playing.
//This function needs to be used by disbleCards and unflipCards.
    resetBoard() {
    
    cardHasFlipped = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null; 
    
    console.log("board successfully reset")
    }

    checkGameProgress() {
        if (scoreCountP1 + scoreCountP2 == 18) {
        alert('Congratulations, you guys finished the Game. ' + 'Scores are ' + 
        'Player1: ' + scoreCountP1 + 'Player2: ' + scoreCountP2)
        }
    }

    determinePoints() {
        if (totalCount % 2 == 0 && firstCard.parentElement.dataset.attribute === secondCard.parentElement.dataset.attribute) {
          scoreCountP1++;
          totalScore++;
          console.log("determinePoints for player 1 is: " + scoreCountP1)
        } else if (totalCount % 2 !== 0 && firstCard.parentElement.dataset.attribute === secondCard.parentElement.dataset.attribute) {
          scoreCountP2++;
          totalScore++;
          console.log("determinePoints for player 2 is: " + scoreCountP2)
        }
        
      }

}