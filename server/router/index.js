const Router = require('express').Router();

Router.get('/', (req, res) => {
  res.send('hit the api bruh');
});

module.exports = Router;