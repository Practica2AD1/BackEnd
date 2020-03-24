"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tallerController_1 = __importDefault(require("../controllers/tallerController"));
class TallerRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/telefono', tallerController_1.default.getTelefono);
        this.router.get('/direccion', tallerController_1.default.getDireccion);
        this.router.get('/correo', tallerController_1.default.getCorreo);
        this.router.get('/nombre', tallerController_1.default.getNombre);
        this.router.get('/foto/:string', tallerController_1.default.getPath);
    }
}
const tallerRoutes = new TallerRoutes();
exports.default = tallerRoutes.router;
