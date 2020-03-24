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
class PreguntaController {
    //DEVOLVER TODOS LAS PREGUNTAS
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pregunta = yield database_1.default.query('SELECT * FROM Pregunta WHERE estado = 1');
            if (pregunta.length > 0) {
                return res.json(pregunta);
            }
            res.status(404).json({ text: 'La pregunta no existe' });
        });
    }
    //CREAR UN NUEVA PREGUNTA
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO Pregunta set ?', [req.body]);
            res.json('Pregunta creada');
        });
    }
    //DEVOLVER SOLO UNA PREGUNTA
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pregunta = yield database_1.default.query('SELECT * FROM Pregunta WHERE id_pregunta = ? and estado = 1', [id]);
            if (pregunta.length > 0) {
                return res.json(pregunta[0]);
            }
            res.status(404).json({ text: 'La pregunta no existe' });
        });
    }
    listCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pregunta = yield database_1.default.query('SELECT * FROM CategoriaPregunta WHERE estado = 1');
            if (pregunta.length > 0) {
                return res.json(pregunta);
            }
            console.log('llego aca');
            res.status(404).json({ text: 'La Categoria no existe' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("entro al update", req.params);
            const { id } = req.params;
            const val = yield database_1.default.query('UPDATE Pregunta set ? WHERE id_pregunta = ?', [req.body, id]);
            res.json('El servicio se actualizado');
        });
    }
}
const preguntaController = new PreguntaController();
exports.default = preguntaController;
/*,
    "build": "tsc -w",
    "dev": "nodemon build/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"*/ 
