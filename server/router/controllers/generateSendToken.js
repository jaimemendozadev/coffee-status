const {tokenForUser} = require('../../utils.js');

const generateSendToken = (req, res) => {
  //At this point, if there is an error, User gets redirected to empty page with  /auth/google/callback?code url
  
  //expect to get user in req from Passport Google Verify CB 
  const {user} = req;  
  //generate JWT
  const generatedToken = tokenForUser(user);  
  //redirect to login
  res.redirect(`/login?token=${generatedToken}`);
}

module.exports = generateSendToken;