let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());

// Add your routes here

module.exports = app;
