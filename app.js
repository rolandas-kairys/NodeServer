//importing express
const express = require('express');
const routes = require('./routes/index.js');

// creating an instance of express and storing in variable
const app = express();

const dataFile = require('./data/data.json');


// and the using PUG
app.set('view engine', 'pug');
app.set('views', './views');


// using routes module
app.use('/', routes);



module.exports = app;
