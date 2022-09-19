require("dotenv").config();
const { User } = require("../models");
const jwt = require("jsonwebtoken");

// regsiter
const handleRegister = (req, res) => {
  const user = [req.body.email, req.body.password, req.body.repeated_password, req.body.role];
  
  if(user[1] !== user[2]) {
    res.json()
  }
};

module.exports = {
  handleRegister,
};
