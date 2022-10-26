'use strict';

function genFullLeaderboard () {
  let sortedLeaderboard = leaderboard.sort((a,b) => b.score - a.score);
  let topFullName = document.getElementById('fullLeaderboard');
  topFullName.textContent = '';
  // let topTenScore = document.getElementById('leaderboardScore');
  for (let i = 0; i < sortedLeaderboard.length; i++) {
    let lbFull = document.createElement('li');
    lbFull.textContent = `${sortedLeaderboard[i].name}: ${sortedLeaderboard[i].score}`;
    topFullName.appendChild(lbFull);
    // let lbScore = document.createElement('li');
    // lbScore.textContent = sortedLeaderboard[i].score;
    // topTenScore.appendChild(lbScore);
  }
}

genFullLeaderboard();