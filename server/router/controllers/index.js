//Twilio Credentials
const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;

//require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

const makeACall = (req, res) => {

  client.messages
    .create({
      to: '+13233837587',
      from: process.env.PHONENUMBER,
      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    })
    .then(message => {
      console.log("Message ", message);
      console.log("message.sid ", message.sid);
      
      res.send(message);
    });
}


const createCustomDrink = (req, res) => {
  console.log('hit createACustomDrink ', req.body);
  res.send('hit createACustomDrink');
}




module.exports = {
  makeACall,
  createCustomDrink
}
