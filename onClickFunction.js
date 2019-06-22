//On click, save players inserted names and push them to the players array + save to localStorage.
submitBtnUI.onclick = function () {
    
    var playerName = playerName1UI.value;
    var playerName2 = playerName2UI.value;

    if (playerName == "" || playerName2 == "") {
        alert('Please insert names')

    } else {
        new Player(playerName1UI.value);
        new Player(playerName2UI.value);

        players.push(new Player(playerName, 0, 0));
        players.push(new Player(playerName2, 0, 0));




        savePlayerNames();
        loadPlayerNames();

        window.location.href = "./memory_board.html";
    }
}