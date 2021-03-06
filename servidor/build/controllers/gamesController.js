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
class GamesController {
    //DEVOLVER TODOS LOS SERVICIOS
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const servicios = yield database_1.default.query('SELECT * FROM Servicio');
            if (servicios.length > 0) {
                return res.json(servicios);
            }
            res.status(404).json({ text: 'El servicio no existe' });
        });
    }
    //CREAR UN NUEVO SERVICIO
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            yield database_1.default.query('INSERT INTO Servicio set ?', [req.body]);
            res.json('Servicio creado');
        });
    }
    //DEVOLVER UN UNICO JUEGO
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const servicio = yield database_1.default.query('SELECT * FROM Servicio WHERE id_servicio = ?', [id]);
            //console.log(servicio);
            if (servicio.length > 0) {
                return res.json(servicio[0]);
            }
            res.status(404).json({ text: 'El servicio no existe' });
        });
    }
    delete(req, res) {
        res.json('eliminado un servicio');
    }
    update(req, res) {
        res.json('actualizando un servicio');
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
