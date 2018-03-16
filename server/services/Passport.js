const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/api/auth/google/callback"
  },
  async(accessToken, refreshToken, profile, cb) => {
    
    //send payload to DB API
    //if the user is not found, create the user in DB
    let googleUser = {
      social_id: profile.id, 
      first_name: profile.name.givenName, 
      last_name: profile.name.familyName,
      email: profile.emails.value,
      profile_image_url: photos[0].value
    }



  }
));