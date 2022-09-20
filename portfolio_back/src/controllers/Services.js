const { Service } = require("../models");

// get all services
const getServices = async (req, res) => {
  await Service.find().then((services) => {
    if (!services) {
      res.status(400).json({ message: "Services not found!" });
    }
    res.status(200).json(services);
  });
};

// get one service



module.exports = {
  getServices,
};
