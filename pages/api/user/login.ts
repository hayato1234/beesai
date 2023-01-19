import nextConnect from "next-connect";
import passport from "../../../lib/passport";
import auth from "../../../middleware/auth";
import { getToken } from "../../../lib/auth-jwt";

const handler = nextConnect();

handler
  .use(auth)
  .post(
    passport.authenticate("local", { session: false }),
    (req: any, res: any) => {
      const token = getToken({ _id: req.user._id });
      console.log("req", token);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: true,
        token: token,
        status: "You are successfully logged in!",
      });
    }
  );

export default handler;
