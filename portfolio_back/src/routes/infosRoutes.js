const express = require("express");
const router = express.Router();

// require controllers
const { Infos } = require("../controllers");

// require authorization
const {
  authorization,
  authorizationRole,
} = require("../middlewares/autorization");

// routes

// get all infos
router.route("/").get(Infos.getInfos);

// get one info with Id
router.route("/:Id").get(
  authorization,
  authorizationRole("admin"),
  Infos.getOne
);

// add info
router.route("/").post(
    authorization,
    authorizationRole("admin"),
  Infos.addInfo
);

// delete info with Id
router.route("/:Id").delete(
    authorization,
    authorizationRole("admin"),
  Infos.deleteInfo
);

// update info
router.route("/:Id").put(
    authorization,
    authorizationRole("admin"),
  Infos.updateInfo
);

module.exports = router;
