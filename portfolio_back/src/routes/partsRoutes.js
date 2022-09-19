const express = require("express");
const router = express.Router();

// require controllers
// const { Pars } = require("../controllers");

// require authorization
// const {} = require("../middlewares");

// routes

// get all parts
router.route("/").get();

// add part
router.route("/").post();

// delete part with Id
router.route("/Id").delete();

// update part
router.route("/Id").put();

module.exports = router;
