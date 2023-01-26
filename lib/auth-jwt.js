import { sign } from "jsonwebtoken";
import passport from "../lib/passport";

export function getToken(user) {
  return sign(user, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 6 });
}

export const verifyUser = passport.authenticate("jwt", { session: false });
