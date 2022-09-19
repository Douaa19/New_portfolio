const mongoose = require("mongoose");

const Services = new mongoose.Schema({
  service_name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

const Service = mongoose.model("Services", Services);

module.exports = Service;
