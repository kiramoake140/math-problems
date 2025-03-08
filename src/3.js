const math = require('mathjs');

function solveMathProblem(problem) {
  const result = math.evaluate(problem);
  return result;
}
