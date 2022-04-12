"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const pool = require("../db");
//add new ingredient
router.post("/ingredient/add", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, unit, category, isRare, imgUrl } = req.body;
        const newIngredient = yield pool.query(`INSERT INTO ingredients(name) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [name], [unit], [category], [isRare], [imgUrl]);
        res.status(200).json(newIngredient);
    }
    catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
}));
// ingredients_id SERIAL PRIMARY KEY,
// name VARCHAR(50) UNIQUE,
// unit VARCHAR(10) NOT NULL,
// category VARCHAR(20) NOT NULL,
// isRare BOOLEAN DEFAULT false,
// imgUrl VARCHAR(150)
module.exports = router;
