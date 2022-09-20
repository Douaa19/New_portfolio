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

// get project
const getProject = async (req, res) => {
  await Project.findById(req.params.Id).then((project) => {
    if (!project) {
      res.json({ message: "Project not found!" });
    }
    res.status(200).json(project);
  });
};

module.exports = {
  getProjects,
  getProject,
};
