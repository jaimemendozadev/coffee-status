const TwilioClient = require('../../services/Twilio.js');
const axios = require('axios');
const DB_API = process.env.DB_API;
const TWILIO_NUM = process.env.TWILIO_PHONE_NUMBER;



const createCustomDrink = async (req, res) => {
  
    const {customDrink} = req.body;
    const {social_id} = req.user;

    try {

      //get user phone_number & _id from DB
      let fetchedUser = await axios.get(`${DB_API}/user/${social_id}`).then(result => result.data);
      
      const {_id, phone_number} = fetchedUser;
      

      //update customDrink with user._id reference and save in DB
      customDrink.created_by = _id;

      
      let DBResult = await axios.post(`${DB_API}/customdrink`, {customDrink})
      .then(result => result.data);

      //update user entry in DB with new customDrink
      let updatedUser = await axios.post(`${DB_API}/user/${social_id}/drink`, {custom_drink: DBResult}).then(result => result.data); 

  
      //send text message to user with Coffeeshop's Twilio Number to text orders
      TwilioClient.messages
        .create({
          body: "Use this phone number to order your custom drink in advance!",
          to: phone_number,
          from: TWILIO_NUM,
          mediaUrl: 'http://www.example.com/cheeseburger.png',
        })
        .then(message => process.stdout.write(message.sid));
      
      res.send({success: "We've saved your drink information! You'll receive a text message from us soon. Use this number to text us and we'll be notified to start making your order ASAP!"});
  
      
  
    } catch(error){
      res.send({error: 'There was an error saving the data in the database.'})
    }
  }


  module.exports = createCustomDrink;