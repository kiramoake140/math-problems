// Generate a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Get a random math problem
let problem = `What is ${getRandomNumber()} times ${getRandomNumber()}?`;

console.log(problem);
