class User {
    constructor(firstName, lastName, userName, password, organisation){
        this.firstName = firstName;
        this.lastName = lastName
        this.userName = userName;
        this.password = password;
        this.organisation = organisation;
    }
}

//Henrik: game class, next turn var, p1 or p2 update on turns,
class Player {
    constructor(playerName,indiScore, indiMiss, turn){
        this._playerName = playerName;
        this._indiScore = indiScore; // individual Score
        this._indiMiss = indiMiss; // individual missmatches
        this._turn = turn;
    
    } get individualScore() {
        return this._indiScore;
    
    } get individualMiss() {
        return this._indiMiss;
    
    } get turn() {
        return this._turn;

    } get playerName() {
        return this._playerName;

    }
}

class Game {
    constructor(winner,totalGameTime, totalTurns,totalMiss, statsP1, statsP2){
        this._winner = winner;
        this.totalGameTime = totalGameTime;
        this.totalTurns = totalTurns;
        this.totalMiss = totalMiss;
        this.statsP1 = statsP1; // displays P1's score and stats
        this.statsP2 = statsP2; // these will be computed with game overall stats and indiPlayerStats
    
    } set victory(winner) {
     return this._winner = winner;
    }
}