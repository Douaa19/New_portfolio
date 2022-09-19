const mongoose = require("mongoose");

const Clients = new mongoose.Schema({
  client_name: {
    type: String,
    required: true,
    minlength: [5, "The name must be greater than 5 characters"],
    maxlength: [15, "The name must be less than 15 characters"],
  },
  client_email: {
    type: String,
    required: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email format",
    ],
  },
});

const Client = mongoose.model("Clients", Clients);

module.exports = Client;
