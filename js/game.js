'use strict';

let activeUser = getCurrentUser();
let gamePageLeaderboard = getLeaderboard();
let hitTarget = document.getElementById('target');
let missTarget = document.getElementById('background');
let currentScore = 0;
let level = 1;
let miss = 3;

console.log(activeUser);
console.log(gamePageLeaderboard);

updateScoreboard();

function playGame(e) {
  e.preventDefault();
  let userTarget = e.target.id;
  console.log(userTarget);

  if(userTarget == hitTarget.id && miss > 0) {
    currentScore++;
    console.log(`currentScore: ${currentScore}`);
  } 
  else if(userTarget == missTarget.id && miss > 1) {
    miss--;
    console.log(`miss left: ${miss}`);
  } 
  else {
    alert('Game Over. Play again?');
    miss = 3;
    currentScore = 0;
  }
  updateScoreboard();
  updateUserScore();
  // updateLocalStorageLeaderboard();
}

// Updates Whole Scoreboard
function updateScoreboard() {
  updateScore();
  updateLevel();
  missesLeft();
}

// Updates Score
function updateScore() {
  let scoreboardScore = document.querySelector('#scoreboard p:first-child');
  scoreboardScore.textContent = `Score: ${currentScore}`;
}

// Updates Level
function updateLevel() {
  let scoreboardLevel = document.querySelector('#scoreboard p:nth-child(2)');
  currentLevel();
  scoreboardLevel.textContent = `Level: ${level}`;
}

// Updates Misses
function missesLeft() {
  let scoreboardMisses = document.querySelector('#scoreboard p:nth-child(3)');
  scoreboardMisses.textContent = `Misses: ${miss}`;
}

// Identifies Current Level
function currentLevel() {
  if(currentScore == 0) {
    return level;
  }  
  else if(currentScore % 10) {
    return level;
  }
  else {
    return level++;
  }
}

// Finds Username in Leaderboard and Updates Score

function updateUserScore() {
  // let userIndex = gamePageLeaderboard.map(user => user.name).indexOf(activeUser);
  // // console.log(userIndex);
  // // console.log(gamePageLeaderboard[userIndex].score);
  // gamePageLeaderboard[userIndex].score = currentScore;
  // console.log(`userScore: ${gamePageLeaderboard[userIndex].score}`);
  // localStorage.setItem(gamePageLeaderboard[userIndex].score, currentScore);
}


// Event Handeler
hitTarget.addEventListener('click', playGame);
missTarget.addEventListener('click', playGame);