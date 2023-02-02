import { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import dbConnect from "../../../lib/dbConnect";
import auth from "../../../middleware/auth";
import passport from "../../../lib/passport";
import { verifyAdmin, verifyUser } from "../../../lib/auth-jwt";
import { UserType } from "../../../types/user";
import { CartItemType, CartType } from "../../../types/items";

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
        data: cart,
      });
    } catch (e) {
      res.status(400).json({ success: false, error: e });
    }
  })
  .post(verifyUser, async (req: any, res: NextApiResponse) => {
    const data = req.body;
    const userId = req.user._id;
    const cart = await Cart.findOne({ user: userId });

    if (cart) {
      //items found in the cart, so check if the item already exist and update cart
      const itemIndex = cart.items.findIndex(
        (item: CartItemType) => item.item_id.toString() === data.item_id
      );
      if (itemIndex > -1) {
        //item found in the  cart, so update
        if (data.quantity <= 0) {
          //quantity is less than 0, so delete the item
          cart.items.splice(itemIndex, 1);
        } else {
          //update the quantity
          cart.items[itemIndex].quantity = cart.items[itemIndex].quantity + 1;
        }
      } else {
        //item not found, so add the item if quantity is >0
        if (data.quantity > 0) {
          cart.items.push({
            item_id: data.item_id,
            quantity: data.quantity,
            thumbnail: data.thumbnail,
            price_each: data.price_each,
          });
        }
      }
      let result = await cart.save();
      res.status(200).json({ success: true, result });
    } else {
      //no items in the cart, so make cart
      try {
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
        // console.log("Cart created", newCartItems);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(newCartItems);
      } catch (e) {
        res.status(400).json({ success: false, error: e });
      }
    }
  })
  .delete(verifyUser, async (req: any, res: NextApiResponse) => {
    try {
      const userId = req.user._id;
      const cart = await Cart.findOne({ user: userId });
      if (cart) {
        cart.items = [];
        const data = await cart.save();
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
          success: true,
          data: data,
        });
      }
    } catch (e) {
      res.status(400).json({ success: false, error: e });
    }
  });

export default handler;
