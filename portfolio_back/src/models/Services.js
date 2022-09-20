const mongoose = require("mongoose");

const Services = new mongoose.Schema({
  service_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    minlength: [20, "The text must be greater than 20 characters"],
    maxlength: [200, "The text must be less than 50 characters"],
  },
});

const Service = mongoose.model("Services", Services);

module.exports = Service;
