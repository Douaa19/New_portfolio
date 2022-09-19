const express = require("express");
const router = express.Router();

// require controllers
const { Projects } = require("../controllers");

// require authorization
const {} = require("../middlewares");

// routes

// get all projects
router.route("/").get();

// get one project with Id
router.route("/Id").get();

// add project
router.route("/").post();

// delete project with Id
router.route("/Id").delete();

// update project
router.route("/Id").put();

module.exports = router;
