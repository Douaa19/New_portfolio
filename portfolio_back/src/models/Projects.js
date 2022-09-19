const mongoose = require("mongoose");

const Projects = new mongoose.Schema({
  project_name: {
    type: String,
    required: true,
  },
  technologies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Technology",
      required: true,
    },
  ],
  description: {
    type: String,
    required: false,
  },
});

const Project = mongoose.model("Projects", Projects);

module.exports = Project;
