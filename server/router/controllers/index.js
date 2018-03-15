const express = require('express');
const path = require('path');

//Twilio Credentials
const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;

//require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const DB_API = process.env.DB_API;
const TWILIO_NUM = process.env.TWILIO_PHONE_NUMBER;
const axios = require('axios');



const createCustomDrink = async (req, res) => {
  
  let payload = req.body;
  let customerPhoneNumber; //get phone number from DB


  try {
    let DBResult = await axios.post(`${DB_API}/customdrink`, payload)
    .then(result => result.data);
  
    res.send({success: "We've saved your drink information! You'll receive a text message from us soon. Use this number to text us and we'll be notified to start making your order ASAP!"});

    //send text message to user with Coffeeshop's Twilio Number to text orders
    client.messages
      .create({
        body: "Use this phone number to order your custom drink in advance!",
        to: customerPhoneNumber,
        from: TWILIO_NUM,
        mediaUrl: 'http://www.example.com/cheeseburger.png',
      })
      .then(message => process.stdout.write(message.sid));

    

  } catch(error){
    res.send({error: 'There was an error saving the data in the database.'})
  }
}


const placeAnOrder = (req, res) => {
  let customerPhoneNumber; //get phone number from DB

  let orderMessage = {
    to: customerPhoneNumber,
    from: TWILIO_NUM,
    body: `Success! Your order has been placed in the system. Please come to pick it up in a few minutes!`,
  }

  client.messages
    .create(orderMessage)
    .then(message => {
      console.log("Message ", message);
      console.log("message.sid ", message.sid);
      
      res.send(message);
    });
}


const sendStaticAssets = (req, res) => {
  const public = path.resolve(__dirname, '../../../public/index.html');
  res.sendFile(public)
}

/*
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

*/


module.exports = {
  placeAnOrder,
  createCustomDrink,
  sendStaticAssets
}
