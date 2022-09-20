const { Part } = require("../models");

// get all parts
const getParts = async (req, res) => {
  await Part.find().then((parts) => {
    if (!parts) {
      res.json({ message: "Parts not found!" });
    }
    res.status(200).json(parts);
  });
};

// add part
const addPart = async (req, res) => {
  await Part.create({
    part_name: req.body.part_name,
    technos_id: req.body.technos_id,
  }).then((response) => {
    if (!response) {
      res.json({ message: "Part doesn't created!" });
    }
    res.status(200).json({ message: "Part created successfully!", response });
  });
};

// delte part
const deletePart = async (req, res) => {
  await Part.findByIdAndDelete(req.params.Id).then((response) => {
    if (!response) {
      res.json({ message: "Part doesn't deleted!" });
    }
    res.status(200).json({ message: "Part deleted successfully!" });
  });
};

module.exports = {
  getParts,
  addPart,
  deletePart,
};
