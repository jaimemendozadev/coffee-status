const Router = require('express').Router();
const {placeAnOrder, createCustomDrink} = require('./controllers');

Router.get('/', (req, res) => {
  res.send('Hit the API!');
});

Router.post('/customdrink', createCustomDrink);

Router.post('/order', placeAnOrder);

module.exports = Router;