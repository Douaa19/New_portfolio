const express = require("express");
const router = express.Router();

// require controllers
const { Clients } = require("../controllers");

// require authorization
const {
  authorization,
  authorizationRole,
} = require("../middlewares/autorization");

// routes

// get all clients
router.route("/").get();

// sent message to admin
router.route("/message").post(Clients.sendMessage);

module.exports = router;
