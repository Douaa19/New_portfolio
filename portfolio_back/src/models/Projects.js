const mongoose = require("mongoose");

const Projects = new mongoose.Schema({
  project_name: {
    type: String,
    required: true,
  },
  technologies: [
    {
      type: String,
      required: true,
    },
  ],
});
