// Random math problem generator using Node.js

const generateMathProblem = () => {
  // Generate two random numbers between 1 and 10
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;

  // Generate a random operation (+, -, \*, /)
  const operation = ['+', '-', '*', '/'][Math.floor(Math.random() * 4)];

  // Return the problem in the format "num1 operation num2"
  return `${num1} ${operation} ${num2}`;
};
