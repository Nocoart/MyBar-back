"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config();
const formidable = require("express-formidable");
const app = (0, express_1.default)();
app.use(formidable());
const cocktailRoutes = require("./routes/cocktailRoutes");
app.use(cocktailRoutes);
app.all("*", (req, res) => {
    res.json({ message: "route not found" });
});
app.listen(process.env.PORT, () => {
    console.log(`server started on port ${process.env.PORT}`);
});
