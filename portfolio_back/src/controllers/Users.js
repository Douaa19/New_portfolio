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

// login
const handleLogin = (req, res) => {
  (async () => {
    if (!req.body.email) res.json("Email not here!");

    // find user by email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.json({ message: "User not found!" });
    } else if (!req.body.password) {
      res.json({ message: "Password not here!" });
    } else {
      await user
        .comparePasswords(req.body.password)
        .then((result) => {
          if (!result) {
            res.json({ message: "Password incorrect! Please try again." });
          } else {
            const id = user._id;
            const email = user.email;
            const role = user.role;
            const token = jwt.sign(
              { id, email, role },
              process.env.JWT_ACCESS_SECRET
            );
            if (token) {
              res.json({ token });
            } else {
              res.json({ message: "Token doesn't created!" });
            }
          }
        })
        .catch((err) => console.log({ err }));
    }
  })();
};

module.exports = {
  handleRegister,
  handleLogin,
};
