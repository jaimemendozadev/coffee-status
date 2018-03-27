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


/*

the customDrink from the req.body is  { drink: 'Coffee',
  type: [ 'Iced', 'Flat White' ],
  selected_size: 'X-Large',
  selected_milk: 'Almond Milk',
  selected_sweetness: [ 'Sugar in the Raw', 20 ],
  selected_topings: [ 'Caramel Syrup', 20 ] }

*/

const customSuccessMSG = DrinkInfo => {
  const {type} = DrinkInfo;

  return `Congrats! Your ${type[0]} ${type[1]} has been added to your profile! Use this phone number to order your custom drink in advance and we'll have it ready in 10 minutes!`;

}


module.exports = {
  tokenForUser,
  verifyUser,
  tokenExtractor,
  customSuccessMSG
}