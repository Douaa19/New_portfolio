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
const getOne = async (req, res) => {
  const info = await Info.findOne({ _id: req.params.Id });
  if (!info) {
    res.status(400).json({ message: "Info doesn't found!" });
  }
  res.status(200).json(info);
};

// add info
const addInfo = async (req, res) => {
  const infos = {
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
  };
  if (infos) {
    await Info.create({
      phone: infos.phone,
      email: infos.email,
      address: infos.address,
    })
      .then((newInfo) => {
        res.status(200).json({ message: "Info created" });
      })
      .catch((err) => console.log(err));
  } else {
    console.log("Infos are not complet!");
  }
};

// delete one info
const deleteInfo = async (req, res) => {
  await Info.findByIdAndDelete({ _id: req.params.Id }).then((infoDeleted) => {
    if (infoDeleted) {
      res.status(200).json({ message: "Info deleted successfully!" });
    }
  });
};

// update info
const updateInfo = async (req, res) => {
  await Info.findByIdAndUpdate(req.params.Id, req.body).then((infoUpdated) => {
    if (infoUpdated) {
      res.status(200).json({ message: "Info updated successfully!" });
    }
  });
};

module.exports = {
  getInfos,
  getOne,
  addInfo,
  deleteInfo,
  updateInfo,
};
