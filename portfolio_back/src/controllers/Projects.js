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

// add project
const addProject = async (req, res) => {
  await Project.create({
    project_name: req.body.project_name,
    technologies: req.body.technologies,
    description: req.body.description,
    link: req.body.link,
  }).then((response) => {
    if (!response) {
      res.json({ message: "Project not created!" });
    }
    res
      .status(200)
      .json({ message: "Project created successfully!", response });
  });
};

module.exports = {
  getProjects,
  getProject,
  addProject,
};
