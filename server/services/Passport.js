const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const axios = require('axios');
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const DB_API = process.env.DB_API;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/api/auth/google/callback"
  },
  async(accessToken, refreshToken, profile, callback) => {

    let googleUser = {
      social_id: profile.id, 
      first_name: profile.name.givenName, 
      last_name: profile.name.familyName,
      email: profile.emails[0].value,
      profile_image_url: profile.photos[0].value
    }

    //send payload to DB API
    //if the user is not found, create the user in DB
    try {
      
      let fetchedUser = await axios.post(`${DB_API}/user`, googleUser).then(result => result.data);

      callback(null, fetchedUser);


    } catch(error){
      console.log("There was an error saving/updating the user.", error);

      let errorMessage = "Whoops! There was an error finding you in our system, please try again later.";

      //At this point, User gets redirected to empty page with /auth/google/callback?code url
      callback(errorMessage, null);

    }
  }
));