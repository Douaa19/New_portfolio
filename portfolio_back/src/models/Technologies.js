const mongoose = require("mongoose");

const Technologies = new mongoose.Schema({
  techno_name: {
    type: String,
    required: true,
  },
  // project_id: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Project",
  //     default: null,
  //     required: false,
  //   },
  // ],
  // part_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Part",
  //   default: null,
  //   required: false,
  // },
});
const Technology = mongoose.model("Technologies", Technologies);

module.exports = Technology;
