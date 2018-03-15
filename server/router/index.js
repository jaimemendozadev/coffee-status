const passport = require('passport');
const Router = require('express').Router();
const {placeAnOrder, createCustomDrink} = require('./controllers');

Router.get('/', (req, res) => {
  res.send('Hit the API!');
});

Router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));


Router.get('/auth/google/callback', passport.authenticate('google'), )

Router.post('/customdrink', createCustomDrink);

Router.post('/order', placeAnOrder);

module.exports = Router;