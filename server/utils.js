const jwt = require('jsonwebtoken');
const JWTSecret = process.env.JWTSecret;

const tokenForUser = user => {
  const iat = new Date().getTime();

  const payload = {sub: user.social_id, iat };
  
  let token = jwt.sign(payload, JWTSecret);

  console.log("generated tokenForUser ", token);

  return token;
}

const verifyUser = (req, res, next) => {
  let token = req.body.token;
  
  console.log("token from req is ", token)
  
  try {
    var decoded = jwt.verify(token, JWTSecret);
    console.log("decoded is ", decoded)

  } catch(error) {
    console.log("error inside verifyUser is ", error)
  }
}


const tokenExtractor = req => {
  let token = null;

  token = req.body.token || token;
    
  return token;

};

module.exports = {
  tokenForUser,
  verifyUser,
  tokenExtractor
}