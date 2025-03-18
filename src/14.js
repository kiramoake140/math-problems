const { createServer } = require('http');
const express = require('express');
const app = express();
app.get('/math', (req, res) => {
  const problem = Math.random() * 10; // Generate a random math problem between 0 and 10
  const answer = problem ** 2;
  res.json({ problem, answer });
});
createServer(app).listen(3000);
