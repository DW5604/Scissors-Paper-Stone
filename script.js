/* Scissors Paper Stone */

// Global Variables
var currentGameMode = "waiting for username";
var gameResult1 = "scissors";
var gameResult2 = "paper";
var gameResult3 = "stone";
var username = "";
var numberOfGamesPlayed = 0;
var numberOfGamesWon = 0;
var numberOfGamesDrawn = 0;

// Helper Functions

//Choose a random output from scissors, paper or stone
var chooseRandomGameOutput = function () {
  // Make a random decimal number between 1-3
  var randomDecimal = Math.random() * 3;
  console.log("Decimal number between 1-3");
  console.log(randomDecimal);

  // Floor function to produce a number from 0-2
  var randomInteger = Math.floor(randomDecimal);
  console.log("Number from 0-2");
  console.log(randomInteger);

  // Assigning integer values to possible game results
  var gameOutput = "";
  if (randomInteger == 0) {
    gameOutput = gameResult1;
  }
  if (randomInteger == 1) {
    gameOutput = gameResult2;
  }
  if (randomInteger == 2) {
    gameOutput = gameResult3;
  }
  console.log("return gameOutput");
  console.log(gameOutput);
  return gameOutput;
};

// Input Invalidation Helper Function
var checkCorrectInput = function (input) {
  if (input != ("scissors" || "paper" || "stone")) {
    message = "Please choose between scissors, paper or stone.";
  }
  return message;
};

// Scissors Paper Stone
var playScissorsPaperStone = function (input, username) {
  //Choose random option from scissors, paper or stone
  var randomGameOutput = chooseRandomGameOutput();
  console.log("Random Game Output");
  console.log(randomGameOutput);
  //Potential Input Scenarios
  var message = ``;
  // Input Validation
  if (input != ("scissors" || "paper" || "stone")) {
    message = checkCorrectInput(input);
    // Winning Scenario
  }
  if (
    (input == "scissors" && randomGameOutput == "paper") ||
    (input == "paper" && randomGameOutput == "stone") ||
    (input == "stone" && randomGameOutput == "scissors")
  ) {
    // Add 1 to number of games played + number of games won
    numberOfGamesPlayed = numberOfGamesPlayed + 1;
    numberOfGamesWon = numberOfGamesWon + 1;
    // Resulting Message
    message = `The computer chose ${randomGameOutput}. You chose ${input}. You win! Yay! So far ${username}, you've been winning ${numberOfGamesWon}/${numberOfGamesPlayed} turns and drawn ${numberOfGamesDrawn}/${numberOfGamesPlayed} turns. Type "scissors" "paper" or "stone" to play another round !`;
  }
  // Draw
  if (input == randomGameOutput) {
    // Add 1 to number of games played + number of games drawn
    numberOfGamesPlayed = numberOfGamesPlayed + 1;
    numberOfGamesDrawn = numberOfGamesDrawn + 1;
    // Resulting Message
    message = `The computer chose ${randomGameOutput}. You chose ${input}. You drew! So far ${username}, you've been winning ${numberOfGamesWon}/${numberOfGamesPlayed} turns and drawn ${numberOfGamesDrawn}/${numberOfGamesPlayed} turns. Type "scissors" "paper" or "stone" to play another round !`;
  }
  // Losing Scenario
  if (
    (input == "paper" && randomGameOutput == "scissors") ||
    (input == "stone" && randomGameOutput == "paper") ||
    (input == "scissors" && randomGameOutput == "stone")
  ) {
    // Add 1 to number of games played
    numberOfGamesPlayed = numberOfGamesPlayed + 1;
    // Resulting Message
    message = `The computer chose ${randomGameOutput}. You chose ${input}. You lose! Bummer! So far ${username}, you've been winning ${numberOfGamesWon}/${numberOfGamesPlayed} turns and drawn ${numberOfGamesDrawn}/${numberOfGamesPlayed} turns. Type "scissors" "paper" or "stone" to play another round !`;
  }
  //Return message
  console.log("Message after playing game");
  console.log(message);
  return message;
};

// Main
var main = function (input) {
  myOutputValue = "";
  // Game mode: Login
  if (currentGameMode == "waiting for username") {
    console.log("Gamemode - Username");
    console.log(currentGameMode);
    username = input;
    // Change game mode after username verificaiton is successful
    currentGameMode = "scissors paper stone";
    console.log("Gamemode - Scissors Paper Stone");
    console.log(currentGameMode);
    // Message verifying change of game mode
    myOutputValue =
      "Hi " + username + ". Choose scissors, paper or stone to play the game.";
  } else if (currentGameMode == "scissors paper stone") {
    // Play Game
    myOutputValue = playScissorsPaperStone(input, username);
  }
  // Return Output
  console.log("Final Output");
  console.log(myOutputValue);
  return myOutputValue;
};
