const mongoose = require("mongoose");
const { Info } = require("../models");

// get all infos
const getInfos = async (req, res) => {
  await Info.find().then((infos) => {
    if (!infos) {
      res.json({ message: "Infos not found!" });
    }
    res.status(200).json(infos);
  });
};

// get one info
const getOne = (req, res) => {
  console.log("one info");
};

module.exports = {
  getInfos,
  getOne,
};
