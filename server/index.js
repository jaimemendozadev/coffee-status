const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const Router = require('./router');
const {sendStaticAssets} = require('./router/controllers')
const public = path.resolve(__dirname, '../public');

app.use(cors());
app.use(express.static(public));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', Router);
app.get('*', sendStaticAssets);

module.exports = app;