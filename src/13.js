// Generate a random math problem using NodeJS
const crypto = require("crypto");

function generateMathProblem() {
  // Get two random numbers between 1 and 10
  const num1 = crypto.randomInt(1, 10);
  const num2 = crypto.randomInt(1, 10);

  // Generate a random math operator (+, -, x, /)
  const op = Math.random() < 0.5 ? "+" : "-";

  // Generate the problem and solution
  const problem = `${num1} ${op} ${num2}`;
  const solution = eval(problem);

  return { problem, solution };
}
