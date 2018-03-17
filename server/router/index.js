const passportConfig = require('../services/Passport.js')
const passport = require('passport');
const Router = require('express').Router();
const {tokenForUser} = require('../utils.js');
const {placeAnOrder, createCustomDrink} = require('./controllers');


Router.get('/auth/google', 
  passport.authenticate('google', { scope: ['profile', 'email'] })
);


Router.get('/auth/google/callback', passport.authenticate('google', {session: false, failureRedirect: '/login'}), (req, res) => {
  //At this point, if there is an error, User gets redirected to empty page with /auth/google/callback?code url
  
  const {user} = req;

  console.log("req is ", req)
  console.log("\n")

  //expect to get user in req from Passport Google Verify CB  
  console.log("user ", user);
  
  //generate JWT
  const generatedToken = tokenForUser(user);

  console.log("tokenForUser is ", generatedToken);

  //redirect to login
  res.redirect("/login?token=" + generatedToken);

});

Router.post('/customdrink', createCustomDrink);

Router.post('/order', placeAnOrder);

module.exports = Router;