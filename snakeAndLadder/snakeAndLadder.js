function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

// Initialize board with snakes and ladders
const ladders = { 3: 22, 5: 8, 11: 26, 20: 29 };
const snakes = { 17: 4, 19: 7, 21: 9, 27: 1 };
const finalPosition = 30;

// Initialize players
let players = [0, 0]; // Position for two players

function playGame() {
  let winner = null;

  while (winner === null) {
    for (let i = 0; i < players.length; i++) {
      // Roll the die
      const roll = rollDie();
      console.log(`Player ${i + 1} rolls a ${roll}`);

      // Update player position
      players[i] = players[i] + roll;

      // Check for ladders
      if (ladders[players[i]]) {
        console.log(
          `Player ${i + 1} climbs ladder from ${players[i]} to ${
            ladders[players[i]]
          }`
        );
        players[i] = ladders[players[i]];
      }
      // Check for snakes
      else if (snakes[players[i]]) {
        console.log(
          `Player ${i + 1} slides down snake from ${players[i]} to ${
            snakes[players[i]]
          }`
        );
        players[i] = snakes[players[i]];
      }

      // Check if player wins
      if (players[i] >= finalPosition) {
        console.log(`Player ${i + 1} wins!`);
        winner = i + 1;
        break;
      }
    }
  }
}

// Start the game
playGame();
