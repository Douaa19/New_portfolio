const express = require("express");
const router = express.Router();

// require controllers
const { Parts } = require("../controllers");

// require authorization
const {
  authorization,
  authorizationRole,
} = require("../middlewares/autorization");

// routes

// get all parts
router.route("/").get(Parts.getParts);

// add part
router
  .route("/")
  .post(authorization, authorizationRole("admin"), Parts.addPart);

// delete part with Id
router
  .route("/:Id")
  .delete(authorization, authorizationRole("admin"), Parts.deletePart);

// update part
router
  .route("/:Id")
  .put(authorization, authorizationRole("admin"), Parts.updatePart);

module.exports = router;
