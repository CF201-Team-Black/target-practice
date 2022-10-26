'use strict'

console.log('hello');

// GLOBAL VARIABLES

let leaderboard = [];
let userSubmit = document.getElementById('button');
let currentUser = null;
console.log(`First log: ${currentUser}`);

// CONSTRUCTOR

function User(name) {
  this.name = name;
  this.score = 0;
  leaderboard.push(this);
}

// Checks for existing user. If no existing user, User gets called and a new User object is created and stored in leaderboard array.
function enterUsername(e) {
  e.preventDefault();
  
  let clickedPlay = e.target.name.value;
  currentUser = clickedPlay;

  console.log(`currentUser: ${currentUser}`);
  console.log(`clickedPlay: ${clickedPlay}`);
  
  let existingLeaderboard = getLeaderboard();

  if (existingLeaderboard.some(user => user.name === clickedPlay)) {
    console.log(`Welcome back ${clickedPlay}!`);
    alert(`Welcome back ${clickedPlay}!`);
  }
  else {
    console.log(`Welcome ${clickedPlay}`);
    new User(clickedPlay);
    // console.log(`existingLeaderboard: ${existingLeaderboard}`);
    // console.log(`leaderboard: ${leaderboard}`);
    alert(`Welcome ${clickedPlay}`);
  }
  storeLeaderboard();
  storeCurrentUser();
  goToGame();
  console.log(`Final currentUser: ${currentUser}`);
}

// Gets existing leaderboard from local storage and sets existing leaderboard array to equal the values of storedLeaderboard
function getLeaderboard() {
  let storedLeaderboard = JSON.parse(localStorage.getItem('localStorageLeaderboard')) || [];
  // console.log(`storedLeaderboard: ${storedLeaderboard}`);
  leaderboard = storedLeaderboard;
  return storedLeaderboard;
}

// Store leaderboard, not just user info
function storeLeaderboard() {
  let strLeaderboard = JSON.stringify(leaderboard);
  localStorage.setItem('localStorageLeaderboard', strLeaderboard);
}

// Stores away currentUser
function storeCurrentUser() {
  let strCurrentUser = JSON.stringify(currentUser);
  localStorage.setItem('localStorageCurrentUser', strCurrentUser);
}

// Retrieves currentUser from local storage for use on game page
function getCurrentUser() {
  let storedCurrentUser = JSON.parse(localStorage.getItem('localStorageCurrentUser')) || [];
  return storedCurrentUser;
}

// Launches game in same window/tab
function goToGame() {
  location.href = "../html/game.html";
}

// Event Handeler
userSubmit.addEventListener('submit', enterUsername);
