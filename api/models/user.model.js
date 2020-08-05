const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let UserSchema = new Schema(
  {
    name: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      default: "",
    },

    password: {
      type: String,
      default: "",
    },

    restaurantID: {
      type: String,
    },
  },

  {
    versionKey: false,
  }
);

let users = mongoose.model("users", UserSchema);

module.exports = users;