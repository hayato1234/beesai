import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
const passport = require("passport");

//import doesn't work due to typing issue
const User = require("../../../models/user");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "POST":
      try {
        User.register(
          new User({ username: req.body.username }),
          req.body.password,
          (err: any, user: any) => {
            console.log(err);
            if (err) {
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              res.json({ err: err });
            } else {
              if (req.body.first_name) {
                user.first_name = req.body.first_name;
              }
              if (req.body.last_name) {
                user.last_name = req.body.last_name;
              }
              if (req.body.email) {
                user.email = req.body.email;
              }
              user.save((err: any) => {
                if (err) {
                  res.statusCode = 500;
                  res.setHeader("Content-Type", "application/json");
                  res.json({ err: err });
                  return;
                }
                passport.authenticate("local")(req, res, () => {
                  res.statusCode = 200;
                  res.setHeader("Content-Type", "application/json");
                  res.json({
                    success: true,
                    status: "Registration Successful!",
                  });
                });
              });
            }
          }
        );
      } catch (e) {
        res.status(400).json({ success: false, error: e });
      }
      break;
    default:
      res.status(400).json({
        success: false,
        error: `${method} is not allowed`,
      });
  }
}
