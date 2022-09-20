require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT || 8080;

// require mongoose
require("./src/config/mongoose");

// require authorization

// require routes
const {
  authRoutes,
  infosRoutes,
  partsRoutes,
  //   projectsRoutes,
  //   clientsRoutes,
  servicesRoutes,
  //   technosRoutes,
} = require("./src/routes");

// using middlewares
app.use(morgan("tiny"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my portfolio",
  });
});

// routes
app.use("/auth", authRoutes);
app.use("/infos", infosRoutes);
app.use("/services", servicesRoutes);
app.use("/parts", partsRoutes);
// listen to the port
app.listen(PORT, () => {
  console.log(`server is running in: http://localhost:${PORT}`);
});

module.exports = app;
