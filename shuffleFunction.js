function shuffle(cardsDb) {
    var currentIndex = cardsDb.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = cardsDb[currentIndex];
      cardsDb[currentIndex] = cardsDb[randomIndex];
      cardsDb[randomIndex] = temporaryValue;
    }
  
    return cardsDb;
  }
  
  // Create a function to flip the picture on the game //
  
  // var cardsDb = cardsDb;
  
  // Shuffle cardsDb "elements"
  
  cardsDb = shuffle(cardsDb);
  console.log(cardsDb);
  