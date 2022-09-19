require("dotenv").config();
const { User } = require("../models");
const jwt = require("jsonwebtoken");

// regsiter
const handleRegister = (req, res) => {
  const user = [
    req.body.email,
    req.body.password,
    req.body.repeated_password,
    req.body.role,
  ];

  if (user[1] !== user[2]) {
    res.json({ error: "The passwords are not the same!" });
  }

  (async () => {
    try {
      await User.create({
        email: user[0],
        password: user[2],
        role: user[3],
      });
      res.status(200).json({ message: "User created successfully!" });
    } catch (err) {
      console.log(err);
    }
  })();
};

module.exports = {
  handleRegister,
};
