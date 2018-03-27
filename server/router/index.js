const passport = require('../services/Passport.js');
const Router = require('express').Router();
const {tokenForUser, verifyUser} = require('../utils.js');
const {placeAnOrder, createCustomDrink, generateSendToken, getUserProfile, updateUserProfile} = require('./controllers');

Router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

Router.get('/auth/google/callback', passport.authenticate('google', {session: false, failureRedirect: '/login'}), generateSendToken);

Router.post('/user', passport.authenticate('jwt', { session: false }), getUserProfile);

Router.patch('/user', passport.authenticate('jwt', { session: false }), updateUserProfile);

Router.post('/customdrink', passport.authenticate('jwt', { session: false }), createCustomDrink);

Router.post('/order', placeAnOrder);

module.exports = Router;