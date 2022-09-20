const mongoose = require("mongoose");

const Infos = new mongoose.Schema({
  phone: {
    type: Number,
    match: [
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
      "Invalid format",
    ],
    required: false,
    default: null,
  },
  email: {
    type: String,
    required: false,
    default: null,
  },
  address: {
    type: String,
    required: false,
    default: null,
  },
});

const Info = mongoose.model("Infos", Infos);

module.exports = Info;
