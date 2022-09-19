const express = require("express");
const router = express.Router();

// require controllers
// const { Technologies } = require("../controllers");

// require authorization
// const {} = require("../middlewares");

// routes

// get all technos
router.route("/").get();

// add techno
router.route("/").post();

// delete techno with Id
router.route("/Id").delete();

module.exports = router;
