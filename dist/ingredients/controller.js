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
Object.defineProperty(exports, "__esModule", { value: true });
const pool = require("../config/db");
const queries = require("./queries");
const addIngredient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("in th function");
});
const getAllIngredients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield pool.query(queries.getAllIngredients);
        res.status(200).json(response.rows);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
const getIngredientById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield pool.query(queries.getIngredientById, [req.query.id]);
        res.status(200).json(response.rows);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
module.exports = {
    addIngredient,
    getAllIngredients,
    getIngredientById,
};
