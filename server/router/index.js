const passportConfig = require('../services/Passport.js')
const passport = require('passport');
const Router = require('express').Router();
const {tokenForUser} = require('../utils.js');
const {placeAnOrder, createCustomDrink, generateSendToken} = require('./controllers');

console.log("placeAnOrder is ", placeAnOrder);

Router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

Router.get('/auth/google/callback', passport.authenticate('google', {session: false, failureRedirect: '/login'}), generateSendToken);

Router.post('/customdrink', createCustomDrink);

Router.post('/order', placeAnOrder);

module.exports = Router;