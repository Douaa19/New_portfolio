const express = require("express");
const router = express.Router();

// require controllers
const { Clients } = require("../controllers");

// require authorization
const {} = require("../middlewares");

// routes

// get all clients
router.route("/").get();

module.exports = router;
