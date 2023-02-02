import { sign } from "jsonwebtoken";
import passport from "../lib/passport";

export function getToken(user) {
  return sign(user, process.env.SECRET_KEY, { expiresIn: 60 * 60 * 6 });
}

export const verifyUser = passport.authenticate("jwt", { session: false });

export const verifyAdmin = (req, res, next) => {
  if (req.user.admin) {
    return next();
  } else {
    const err = new Error("You are not authorized to perform this operation!");
    err.status = 403;
    return next(err);
  }
};
