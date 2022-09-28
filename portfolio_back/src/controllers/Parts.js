const { Part, Technology } = require("../models");

// get all parts
const getParts = async (req, res) => {
  const parts = await Part.find();


  parts.forEach((element) => {
    console.log(element)
    // let element
    element.technos_id.forEach((id) => {
      Technology.findById(id, (err, result) => {
        // element.technos_name.push(result)
      });
    });
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

// update part
const updatePart = async (req, res) => {
  await Part.findByIdAndUpdate(req.params.Id, {
    part_name: req.body.part_name,
    technos_id: req.body.technos_id ? req.body.technos_id : [],
  }).then((response) => {
    if (!response) {
      res.json({ message: "Part doesn't updated!" });
    }
    res.status(200).json({ message: "Part updated successfully!" });
  });
};

module.exports = {
  getParts,
  addPart,
  deletePart,
  updatePart,
};
