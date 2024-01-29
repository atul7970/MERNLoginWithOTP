const express = require("express");
const cors = require("cors");
const PORT = 8000;
require("dotenv").config();
require("./db/connection");
const router = require("./routes/router");

const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log("Your server is UP!");
});
