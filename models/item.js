const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: { type: String, default: "" },
  image: { type: String, default: "" },
  imageAlt: { type: String, default: "" },
  price: { type: Number, default: 0 },
  description: { type: String, default: "" },
});

module.exports = mongoose.models.Item || mongoose.model("Item", itemSchema);
