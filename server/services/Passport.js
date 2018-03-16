const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/api/auth/google/callback"
  },
  (accessToken, refreshToken, profile, cb) => {
    console.log("accessToken ", accessToken);
    console.log("\n");

    console.log("refreshToken ", refreshToken);
    console.log("\n");

    console.log("profile ", profile);
    console.log("\n");
    

  }
));