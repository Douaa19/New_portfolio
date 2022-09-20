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
const addService = async (req, res) => {
  await Service.create({
    service_name: req.body.service_name,
    description: req.body.description,
  }).then((response) => {
    if (!response) {
      res.json({ message: "Service doesn't created!" });
    }
    res
      .status(200)
      .json({ message: "Service created successfully!", response });
  });
};

module.exports = {
  getServices,
  getService,
  addService,
};
