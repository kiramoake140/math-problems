const math = require('mathjs');

// Define function to solve math problems
function solve(problem) {
  // Use math.js library to evaluate expression
  const result = math.eval(problem);
  return result;
}

// Example usage
console.log(solve('2 + 3')); // Output: 5
