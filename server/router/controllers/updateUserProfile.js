const axios = require('axios');
const DB_API = process.env.DB_API;

const updateUserProfile = async(req, res) => {

  const {social_id} = req.user;
  const {phone_number} = req.body;
  
  try {

    let updatedUser = await axios.patch(`${DB_API}/user/${social_id}`, {phone_number}).then(result => result.data);
    
    res.send(updatedUser);

  } catch(error) {
    
    console.log("the error inside updateUserProfile ", error);

    // send back error response
    res.send({error: true, message: "There was an error updating the user."})
    
  }

}

module.exports = updateUserProfile;