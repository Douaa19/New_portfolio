require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT || 8080;

//
app.use(morgan("tiny"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my portfolio",
  });
});

app.listen(PORT, () => {
  console.log(`server is running in: http://localhost:${PORT}`);
});
