const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Currency = mongoose.Types.Currency;

const schemaOptions = {
  timestamps: true,
};

const cartItemSchema = new Schema(
  {
    item_id: {
      type: mongoose.Types.ObjectId,
      ref: "Item",
    },
    thumbnail: { type: String, default: "" },
    quantity: { type: Number, default: 1, min: 1 },
    price_each: { type: Currency, default: 0, min: 0 },
  },
  schemaOptions
);

const cartSchema = new Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [cartItemSchema],
});

module.exports = mongoose.models.Cart || mongoose.model("Cart", cartSchema);
