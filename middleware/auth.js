import nextConnect from "next-connect";

const passport = require("passport");
const auth = nextConnect().use(passport.initialize());

export default auth;
