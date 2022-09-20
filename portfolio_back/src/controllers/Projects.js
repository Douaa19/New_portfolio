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

// delete project
const deleteProject = async (req, res) => {
  await Project.findByIdAndDelete({ _id: req.params.Id }).then((response) => {
    if (!response) {
      res.json({ message: "Project not deleted!" });
    }
    res.status(200).json({ message: "Project deleted successfully!" });
  });
};

// update project
const updateProject = async (req, res) => {
  await Project.findByIdAndUpdate(req.params.Id, {
    project_name: req.body.project_name,
    technologies: req.body.technologies ? req.body.technologies : [],
    description: req.body.description,
    description: req.body.link,
  }).then((response) => {
    if (!response) {
      res.json({ message: "Project not updated!" });
    } else {
      res.status(200).json({ message: "Project updated successfully!" });
    }
  });
};

module.exports = {
  getProjects,
  getProject,
  addProject,
  deleteProject,
  updateProject,
};
