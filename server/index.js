const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const Router = require('./router');

const public = path.resolve(__dirname, '../public');

app.use(express.static(public));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', Router);

module.exports = app;