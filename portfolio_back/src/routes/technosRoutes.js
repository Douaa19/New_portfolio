const express = require("express");
const router = express.Router();

// require controllers
const { Technologies } = require("../controllers");

// require authorization
const {
  authorization,
  authorizationRole,
} = require("../middlewares/autorization");

// routes

// get all technos
router.route("/").get(Technologies.getTechnos);

// add techno
router
  .route("/")
  .post(authorization, authorizationRole("admin"), Technologies.addTechno);

// delete techno with Id
router
  .route("/:Id")
  .delete(authorization, authorizationRole("admin"), Technologies.deleteTechno);

module.exports = router;
