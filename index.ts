import dotenv from "dotenv";
import express, { Application, Request, Response, NextFunction } from "express";

dotenv.config();
const app: Application = express();
app.use(express.json());

const ingredientRoutes = require("./ingredients/routes");

app.get("/", (req: Request, res: Response): void => {
  res.send("default route");
});

app.use("/ingredients", ingredientRoutes);

app.all("*", (req: Request, res: Response): void => {
  res.json({ message: "route not found" });
});

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});
