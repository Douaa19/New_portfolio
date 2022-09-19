const express = require("express");
const router = express.Router();

// require controllers
// const { Infos } = require("../controllers");

// require authorization
// const {} = require("../middlewares");

// routes

// get all services
router.route("/").get();

// get one service with Id
router.route("/Id").get();

// add service
router.route("/").post();

// delete service with Id
router.route("/Id").delete();

// update service
router.route("/Id").put();

module.exports = router;