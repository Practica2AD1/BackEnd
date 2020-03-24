"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const preguntasController_1 = __importDefault(require("../controllers/preguntasController"));
class PreguntaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', preguntasController_1.default.list);
        this.router.get('/:id', preguntasController_1.default.getOne);
        this.router.post('/', preguntasController_1.default.create);
    }
}
const preguntaRoutes = new PreguntaRoutes();
exports.default = preguntaRoutes.router;
