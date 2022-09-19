const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Users = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email format",
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: [5, "the password must be greater than 5 characters"],
    maxlength: [20, "the password must be less than 20 characters"],
  },
  role: {
    type: String,
    required: false,
    default: "admin",
  },
});

Users.pre("save", function (nex) {
  const user = this;
  if (!user.isModified("password")) return next();

  bcrypt.hash(use.password, 10).then((hashedPassword) => {
    user.password = hashedPassword;
    naxt();
  });
});

Users.methods.comparePasswords = function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model("Users", Users);

module.exports = User;
