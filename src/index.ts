import dotenv from "dotenv";
import express, { Application, Request, Response, NextFunction } from "express";
dotenv.config();

const formidable = require("express-formidable");

const add = (a: number, b: number): number => a + b;

const app: Application = express();
app.use(formidable());

app.get("/", (req: Request, res: Response) => {
  console.log(add(5, 4));
  res.send("hello");
});

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
