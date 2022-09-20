const { Technology } = require("../models");

// get all technos
const getTechnos = async (req, res) => {
  await Technology.find().then((technos) => {
    if (!technos) {
      res.json({ message: "Technologies not found!" });
    }
    res.status(200).json(technos);
  });
};

// add techno
const addTechno = async (req, res) => {
  await Technology.create({
    techno_name: req.body.techno_name,
    project_id: req.body.project_id ? req.body.project_id : null,
    part_id: req.body.part_id ? req.body.part_id : null,
  }).then((response) => {
    if (!response) {
      res.json({ message: "Technologie not created!" });
    }
    res
      .status(200)
      .json({ message: "Technologie created successfully!", response });
  });
};

// delete techno
const deleteTechno = async (req, res) => {
  await Technology.findByIdAndDelete(req.params.Id).then((response) => {
    if (!response) {
      res.json({ message: "Technologie not deleted!" });
    }
    res.status(200).json({ message: "Technologie deleted successfully!" });
  });
};

module.exports = {
  getTechnos,
  addTechno,
  deleteTechno,
};
