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
      default: null,
    },
  ],
  description: {
    type: String,
    required: false,
    minlength: [20, "The text must be greater than 20 characters"],
    maxlength: [200, "The text must be less than 50 characters"],
  },
  link: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model("Projects", Projects);

module.exports = Project;
