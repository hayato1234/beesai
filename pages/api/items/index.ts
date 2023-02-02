import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import { verifyAdmin, verifyUser } from "../../../lib/auth-jwt";
import dbConnect from "../../../lib/dbConnect";
import auth from "../../../middleware/auth";
const Item = require("../../../models/item");

const handler = nextConnect();

handler
  .use(auth)
  .get(async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const items = await Item.find({});
      res.status(200).json({ success: true, data: items });
    } catch (e) {
      res.status(400).json({ success: false, error: e });
    }
  })
  .post(
    verifyUser,
    verifyAdmin,
    async (req: NextApiRequest, res: NextApiResponse) => {
      try {
        console.log(req.body);
        await Item.create(req.body);
        console.log("post success");
        res.status(200).json({ success: true, data: req.body });
      } catch (e) {
        console.log(e);
        res.status(400).json({ success: false, error: e });
      }
    }
  );

export default handler;

// another way
// export default async function handler(req: any, res: NextApiResponse) {
//   const { method } = req;
//   await dbConnect();
//   switch (method) {
//     case "GET":
//       try {
//         const items = await Item.find({});
//         res.status(200).json({ success: true, data: items });
//       } catch (e) {
//         res.status(400).json({ success: false, error: e });
//       }
//       break;
//     case "POST":
//       if (req.user.admin) {
//         try {
//           await Item.create(req.body);
//           console.log("post success");
//           res.status(200).json(req.body);
//         } catch (e) {
//           res.status(400).json({ success: false, error: e });
//         }
//       } else {
//         const err = new Error(
//           "You are not authorized to perform this operation!"
//         );
//         res.status(403).json({ success: false, error: err });
//       }

//       break;
//     default:
//       res.status(400).json({
//         success: false,
//         error: `${method} is not allowed`,
//       });
//   }
// }
