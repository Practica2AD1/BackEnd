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
        this.router.get('/', tallerController_1.default.list);
    }
}
const tallerRoutes = new TallerRoutes();
exports.default = tallerRoutes.router;
