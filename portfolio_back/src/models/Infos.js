const mongoose = require("mongoose");

const Infos = new mongoose.Schema({
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Info = mongoose.model("Infos", Infos);

module.exports = Info;
