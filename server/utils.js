const jwt = require('jwt-simple');
const JWTSecret = process.env.JWTSecret;

const tokenForUser = user => {
  const iat = new Date().getTime();

  const payload = {sub: user.social_id, iat };
  
  return jwt.encode(payload, JWTSecret);
  
}


module.exports = {
  tokenForUser
}