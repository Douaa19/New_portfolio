const express = require("express");
const router = express.Router();

// require controller
// const { Users } = require("../controllers");

// routes

// register
router.route("/register").post();

// login
router.route("/login").post();

module.exports = router;
