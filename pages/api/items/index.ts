import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../lib/dbConnect";
const Item = require("../../../models/item");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const items = await Item.find({});
        res.status(200).json({ success: true, data: items });
      } catch (e) {
        res.status(400).json({ success: false, error: e });
      }
      break;
    default:
      res
        .status(400)
        .json({ success: false, error: new Error(`${method} is not allowed`) });
  }
}
