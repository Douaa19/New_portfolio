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
const getService = async (req, res) => {
  await Service.findById({ _id: req.params.Id }).then((service) => {
    if (!service) {
      res.json({ message: "Service not found!" });
    }
    res.status(200).json(service);
  });
};

// add service
const addService = (req, res) => {
  console.log(req.body);
};

module.exports = {
  getServices,
  getService,
  addService,
};
