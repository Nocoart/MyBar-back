require("dotenv").config();
const express = require("express");
const formidable = require("express-formidable");
const axios = require("axios");

const app = express();
app.use(formidable());

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.all("*", (req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
