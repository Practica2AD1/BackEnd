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
    //DEVOLVER EL TELEFONO DE LA EMPRESA
    getTelefono(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const servicios = yield database_1.default.query('SELECT telefono FROM Empresa WHERE id_empresa = 1 and estado = 1');
            if (servicios.length > 0) {
                return res.json(servicios[0]);
            }
            res.status(404).json({ text: 'El servicio no existe' });
        });
    }
    //DEVOLVER LA DIRECCION DE LA EMPRESA
    getDireccion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const servicios = yield database_1.default.query('SELECT direccion FROM Empresa WHERE id_empresa = 1 and estado = 1');
            if (servicios.length > 0) {
                return res.json(servicios[0]);
            }
            res.status(404).json({ text: 'El servicio no existe' });
        });
    }
    //DEVOLVER EL CORREO DE LA EMPRESA
    getCorreo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const servicios = yield database_1.default.query('SELECT correo FROM Empresa WHERE id_empresa = 1 and estado = 1');
            if (servicios.length > 0) {
                return res.json(servicios[0]);
            }
            res.status(404).json({ text: 'El servicio no existe' });
        });
    }
    //DEVOLVER EL NOMRE DE LA EMPRESA
    getNombre(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const servicios = yield database_1.default.query('SELECT nombreEmpresa FROM Empresa WHERE id_empresa = 1 and estado = 1');
            if (servicios.length > 0) {
                return res.json(servicios[0]);
            }
            res.status(404).json({ text: 'El servicio no existe' });
        });
    }
    //DEVOLVER UNA FOTO
    getPath(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { string } = req.params;
            console.log(req.params);
            const servicios = yield database_1.default.query('SELECT pathImagen FROM Foto where lower(nombreFoto) = lower(?) and estado = 1', [string]);
            if (servicios.length > 0) {
                return res.json(servicios[0]);
            }
            res.status(404).json({ text: 'La foto no existe' });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
