const mongoose = require("mongoose");

const Parts = new mongoose.Schema({
  part_name: {
    type: String,
    required: true,
  },
  technos_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Technology",
      reduired: true,
      default: null,
    },
  ],
});

const Part = mongoose.model("Parts", Parts);

module.exports = Part;
