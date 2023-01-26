const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const itemSchema = require("./item");
const Schema = mongoose.Schema;

const schemaOptions = {
  timestamps: true,
};

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      default: "",
      // required: true,
    },
    last_name: {
      type: String,
      default: "",
      // required: true,
    },
    email: {
      type: String,
      default: "",
      // required: true,
    },
    username: {
      type: String,
      default: "",
    },
    password: {
      type: String,
    },
    admin: {
      type: Boolean,
      default: false,
    },
    accessToken: {
      type: String,
    },
  },
  schemaOptions
);

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
