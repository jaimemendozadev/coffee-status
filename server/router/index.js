const passportConfig = require('../services/Passport.js')
const passport = require('passport');
const Router = require('express').Router();
const {placeAnOrder, createCustomDrink} = require('./controllers');


Router.get('/auth/google', 
  passport.authenticate('google', { scope: ['profile', 'email'] })
);


Router.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
  console.log("req is ", req)
  console.log("res ", res);
});

Router.post('/customdrink', createCustomDrink);

Router.post('/order', placeAnOrder);

module.exports = Router;