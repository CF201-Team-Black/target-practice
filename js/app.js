'use strict'

console.log('hello');

// GLOBAL VARIABLES

let leaderboard = [];
let userSubmit = document.getElementById('button');

// CONSTRUCTOR

function User(name) {
  this.name = name;
  this.score = 0;
  leaderboard.push(this);
}

// function to get leaderboard from local storage
function getUser() {
  //check if local storage has user data
  let previousUsers = JSON.parse(localStorage.getItem('leaderboard'));
  //if yes, parse user data
  if (previousUsers) {
    console.log('this is previous users', previousUsers);
    leaderboard = previousUsers;
  } else{
    leaderboard = [];
  }
}

// save user to local storage
function storeUser(previousBoard) {
  let stringifiedLeaderboard = JSON.stringify(leaderboard);
  //create an array to store all users
  // console.log('line34', previousBoard)
  // console.log('line35', previousBoard.push(stringifiedLeaderboard[0]))
  localStorage.setItem('leaderboard', stringifiedLeaderboard);
}


// event handler (enter user to leaderboard or pull high score from local storage)
function handleSubmit(event) {
  event.preventDefault();
  let clickedPlay = event.target.name.value;
  console.log(clickedPlay);
  if (leaderboard.some(user => user.name === clickedPlay)) {
    alert(`Welcome back ${clickedPlay}`);
  }else {
    alert(`Welcome ${clickedPlay}`);
    new User(clickedPlay);
  }
  let previousUsers = getUser();
   console.log('got previousUsers', previousUsers);
  storeUser(previousUsers);
}

// event handler (take user to gameplay page)
function goToGame(event) {
  event.preventDefault();

}


userSubmit.addEventListener('submit', handleSubmit);
userSubmit.addEventListener('submit', goToGame);