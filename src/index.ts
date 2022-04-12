import dotenv from "dotenv";
import express, { Application, Request, Response, NextFunction } from "express";
dotenv.config();

const pool = require("./db");

const formidable = require("express-formidable");

const app: Application = express();
app.use(formidable());

const cocktailRoutes = require("./routes/cocktailRoutes");
app.use(cocktailRoutes);

app.all("*", (req: Request, res: Response): void => {
  res.json({ message: "route not found" });
});

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
