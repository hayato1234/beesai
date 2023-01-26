const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const User = require("../models/user");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET_KEY;

passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    console.log("JWT payload:", jwt_payload);
    User.findOne({ _id: jwt_payload._id }, (err, user) => {
      if (err) {
        //err
        return done(err, false);
      } else if (user) {
        // no err and found the user
        return done(null, user);
      } else {
        // no err with no user
        return done(null, false);
      }
    });
  })
);

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const obj = await User.findOne({ email: profile.email });
        if (!obj) {
          //new user
          const newUser = new User({
            email: profile.email,
            name: profile.displayName,
            accessToken,
          });
          await newUser.save();
          const token = await jwt.sign(
            {
              id: newUser._id,
              create: Date.now().toString(),
            },
            process.env.SECRET_KEY
          );
          // newUser.tokens.push(token);
          await newUser.save();
          done(null, newUser, { message: "Auth successful", token });
        } else {
          //user exists
          const token = await jwt.sign(
            {
              id: obj._id,
              create: Date.now().toString(),
            },
            process.env.SECRET_KEY
          );
          // obj.token
          done(null, obj, { message: "Auth success", token });
        }
      } catch (err) {
        console.log(err);
        done(err, false, { message: "Internal server error" });
      }
    }
  )
);

// export const verifyUser = passport.authenticate("jwt", { session: false });

export default passport;
