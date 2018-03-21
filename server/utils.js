const jwt = require('jwt-simple');
const JWTSecret = process.env.JWTSecret;

const tokenForUser = user => {
  const iat = new Date().getTime();

  const payload = {sub: user.social_id, iat };
  
  return jwt.encode(payload, JWTSecret);
  
}


const tokenExtractor = (req) => {
  let token = null;

  token = req.headers.authorization || token;
  
  console.log("the token is ", token);
  
  return token;
 

};

module.exports = {
  tokenForUser,
  tokenExtractor
}