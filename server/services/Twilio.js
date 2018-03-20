//Twilio Credentials
const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;

//require the Twilio module and create a REST client
const TwilioClient = require('twilio')(accountSid, authToken);

module.exports = TwilioClient;