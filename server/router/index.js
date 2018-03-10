const Router = require('express').Router();
const MessagingResponse = require('twilio').twiml.MessagingResponse;


Router.get('/', (req, res) => {
  res.send('hit the api bruh');
});

module.exports = Router;