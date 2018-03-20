const passportConfig = require('../services/Passport.js')
const passport = require('passport');
const Router = require('express').Router();
const {tokenForUser} = require('../utils.js');
const {placeAnOrder, createCustomDrink, generateSendToken, getUserProfile} = require('./controllers');



Router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

Router.get('/auth/google/callback', passport.authenticate('google', {session: false, failureRedirect: '/login'}), generateSendToken);

Router.get('/user', passport.authenticate('jwt', { session: false }), getUserProfile);

Router.post('/customdrink', createCustomDrink);

Router.post('/order', placeAnOrder);

module.exports = Router;