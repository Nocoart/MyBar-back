import dotenv from "dotenv";
import express, { Application, Request, Response, NextFunction } from "express";
dotenv.config();

const formidable = require("express-formidable");

const app: Application = express();
app.use(formidable());

const add = (a: number, b: number): number => a + b;

app.get("/", (req: Request, res: Response): void => {
  console.log(add(5, 4));
  res.send("hello");
});

app.all("*", (req: Request, res: Response): void => {
  res.json({ message: "Page not found" });
});

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
