require("dotenv").config();
const express = require("express");
const formidable = require("express-formidable");
const axios = require("axios");

const app = express();
app.use(formidable());

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
