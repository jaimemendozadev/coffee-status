const TwilioClient = require('../../services/Twilio.js');
const TWILIO_NUM = process.env.TWILIO_PHONE_NUMBER;


const placeAnOrder = (req, res) => {
    let customerPhoneNumber; //get phone number from DB
  
    let orderMessage = {
      to: customerPhoneNumber,
      from: TWILIO_NUM,
      body: `Success! Your order has been placed in the system. Please come to pick it up in a few minutes!`,
    }
  
    TwilioClient.messages
      .create(orderMessage)
      .then(message => {
        console.log("Message ", message);
        console.log("message.sid ", message.sid);
        
        res.send(message);
      });
  }

  module.exports = placeAnOrder;