const { Project } = require("../models");

// get all projects
const getProjects = async (req, res) => {
  await Project.find().then((projects) => {
    if (!projects) {
      res.json({ message: "Projects not found!" });
    }
    res.status(200).json(projects);
  });
};

module.exports = {
  getProjects,
};
