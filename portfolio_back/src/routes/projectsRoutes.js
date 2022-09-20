const express = require("express");
const router = express.Router();

// require controllers
const { Projects } = require("../controllers");

// require authorization
const {
  authorization,
  authorizationRole,
} = require("../middlewares/autorization");

// routes

// get all projects
router.route("/").get(Projects.getProjects);

// get one project with Id
router
  .route("/:Id")
  .get(authorization, authorizationRole("admin"), Projects.getProject);

// add project
router
  .route("/")
  .post(authorization, authorizationRole("admin"), Projects.addProject);

// delete project with Id
router.route("/:Id").delete(authorization, authorizationRole("admin"));

// update project
router.route("/:Id").put(authorization, authorizationRole("admin"));

module.exports = router;
