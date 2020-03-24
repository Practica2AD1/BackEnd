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
const database_1 = __importDefault(require("../database"));
class RespuestaController {
    //DEVOLVER TODOS LAS RESPUESTAS
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('SELECT * FROM Respuesta WHERE estado = 1');
            if (respuesta.length > 0) {
                return res.json(respuesta);
            }
            res.status(404).json({ text: 'La respuesta no existe' });
        });
    }
    //CREAR UN NUEVA RESPUESTA
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO Respuesta set ?', [req.body]);
            res.json('Respuesta creada');
        });
    }
    //DEVOLVER SOLO UNA RESPUESTA
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield database_1.default.query('SELECT * FROM Respuesta WHERE id_respuesta = ? and estado = 1', [id]);
            if (respuesta.length > 0) {
                return res.json(respuesta[0]);
            }
            res.status(404).json({ text: 'La respuesta no existe' });
        });
    }
}
const respuestaController = new RespuestaController();
exports.default = respuestaController;
/*,
    "build": "tsc -w",
    "dev": "nodemon build/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"*/ 
