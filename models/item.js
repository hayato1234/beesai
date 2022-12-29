const mongoose = require("mongoose");
require("mongoose-currency").loadType(mongoose);
const Currency = mongoose.Types.Currency;

const schemaOptions = {
  timestamps: true,
};

const itemSchema = new mongoose.Schema(
  {
    title: { type: String, default: "" },
    image: { type: String, default: "" },
    imageAlt: { type: String, default: "" },
    price: { type: Currency, default: 0, min: 0 },
    description: { type: String, default: "" },
    inventory: { type: Number, default: 0, min: 0 },
    discount_id: { type: mongoose.Schema.Types.ObjectId, ref: "Discount" },
    dimensionInch: { type: String },
    dimensionCm: { type: String },
    weightOz: { type: Number },
    weightG: { type: Number },
  },
  schemaOptions
);

module.exports = mongoose.models.Item || mongoose.model("Item", itemSchema);
