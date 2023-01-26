import nextConnect from "next-connect";
import dbConnect from "../lib/dbConnect";

const passport = require("passport");
dbConnect();
const auth = nextConnect().use(passport.initialize());

export default auth;
