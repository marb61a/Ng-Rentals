const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const path = require('path');

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT , function() {
  console.log('App is running!');
});