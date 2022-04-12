import express, { Application, Request, Response, NextFunction, IRouter } from "express";

const router: IRouter = express.Router();
const pool = require("../db");

//add new ingredient

router.post("/ingredient/add", async (req: Request, res: Response): Promise<void> => {});

module.exports = router;
