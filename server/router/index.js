const Router = require('express').Router();
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const {makeACall} = require('../utils.js');

Router.get('/', (req, res) => {
  res.send('hit the api bruh');
});

Router.post('/orderresponse', makeACall);


Router.post('/order', (req, res) => {
 
  // Start our TwiML response.
  const twiml = new MessagingResponse();

  console.log("twiml ", twiml);
 
  // Add a text message.
  const msg = twiml.message('Check out this dancing hot coffee!');
 
  // Add a picture message.
  msg.media('https://i.pinimg.com/originals/8c/6c/55/8c6c55cd70c5dc9bac7860b8d89c386c.gif');

  console.log("msg ", msg);
 
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});


module.exports = Router;