import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
// import { verifyUser } from "../../../lib/auth-jwt";
import dbConnect from "../../../lib/dbConnect";
import auth from "../../../middleware/auth";
import passport from "../../../lib/passport";
import { verifyUser } from "../../../lib/auth-jwt";

//import doesn't work due to typing issue
const User = require("../../../models/user");
const Cart = require("../../../models/cart");

const handler = nextConnect();

handler
  .use(auth)
  .get(verifyUser, async (req: any, res: NextApiResponse) => {
    try {
      const userId = req.user._id;
      const cart = await Cart.findOne({ user: userId });
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: true,
        cart: cart,
        status: "get cart items",
      });
    } catch (e) {
      res.status(400).json({ success: false, error: e });
    }
  })
  .post(verifyUser, async (req: any, res: NextApiResponse) => {
    const userId = req.user._id;
    const cart = await Cart.findOne({ user: userId });
    if (cart) {
      //there's items in the cart, so update
      //   console.log(cartItems);
      res.status(400).json({ success: false, cart });
    } else {
      //no items in the cart, so make cart
      //   console.log(req.user._id);
      try {
        const data = req.body;
        const newCartItems = await Cart.create({
          user_id: userId,
          items: [
            {
              item_id: data.item_id,
              quantity: data.quantity,
              thumbnail: data.thumbnail,
              price_each: data.price_each,
            },
          ],
        });
        console.log("Cart created", newCartItems);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(newCartItems);
      } catch (e) {
        res.status(400).json({ success: false, error: e });
      }
    }
  });

export default handler;

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { method } = req;
//   await dbConnect();
//   switch (method) {
//     case "GET":
//       try {
//         verifyUser()
//       } catch (e) {
//         res.status(400).json({ success: false, error: e });
//       }
//       break;
//     default:
//       res.status(400).json({
//         success: false,
//         error: `${method} is not allowed`,
//       });
//   }
// }
