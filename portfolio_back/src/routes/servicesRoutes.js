const express = require("express");
const router = express.Router();

// require controllers
const { Services } = require("../controllers");

// require authorization
const {
  authorization,
  authorizationRole,
} = require("../middlewares/autorization");

// routes

// get all services
router.route("/").get(Services.getServices);

// get one service with Id
router
  .route("/:Id")
  .get(authorization, authorizationRole("admin"), Services.getService);

// add service
router
  .route("/")
  .post(
    authorization,
    authorizationRole("admin"),
    Services.addService
);

// delete service with Id
router.route("/:Id").delete();

// update service
router.route("/:Id").put();

module.exports = router;
