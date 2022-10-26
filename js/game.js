'use strict';

let activeUser = getCurrentUser();
let hitTarget = document.getElementById('target');
let missTarget = document.getElementById('background');
let currentScore = 0;
let level = 1;
let miss = 3;

console.log('activeUser: ', activeUser);
console.log('leaderboard:', leaderboard);

alert('Ready? Click "OK" to start.');

getLeaderboard();
updateScoreboard();
genTopTen();

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
    storeLeaderboard();
    miss = 3;
    currentScore = 0;
    level = 1;
  }
  genTopTen();
  updateScoreboard();
  updateUserPerformance();
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

function updateUserPerformance() {
  let userIndex = leaderboard.map(user => user.name).indexOf(activeUser);
 
  if(currentScore > leaderboard[userIndex].score) {
    leaderboard[userIndex].score = currentScore;
    leaderboard[userIndex].level = level;
  }
}

// Appending to Ordered List on game page

function genTopTen () {
  let sortedLeaderboard = leaderboard.sort((a,b) => b.score - a.score);
  let topTenName = document.getElementById('leaderboardName');
  topTenName.textContent = '';
  // let topTenScore = document.getElementById('leaderboardScore');
  for (let i = 0; i < sortedLeaderboard.length; i++) {
    let lbName = document.createElement('li');
    lbName.textContent = `${sortedLeaderboard[i].name}: ${sortedLeaderboard[i].score}`;
    topTenName.appendChild(lbName);
    // let lbScore = document.createElement('li');
    // lbScore.textContent = sortedLeaderboard[i].score;
    // topTenScore.appendChild(lbScore);
  }
}




// Event Handeler
hitTarget.addEventListener('click', playGame);
missTarget.addEventListener('click', playGame);
