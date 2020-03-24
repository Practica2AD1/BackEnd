import {Request, Response} from 'express';

import pool from '../database';

class GamesController{
    
    //DEVOLVER EL TELEFONO DE LA EMPRESA
    public async getTelefono (req: Request,res: Response): Promise<any>{
        const servicios = await pool.query('SELECT telefono FROM Empresa WHERE id_empresa = 1');
        if(servicios.length > 0){
            return res.json(servicios[0]);
        }
        res.status(404).json({text: 'El servicio no existe'});
    }
    //DEVOLVER LA DIRECCION DE LA EMPRESA
    public async getDireccion (req: Request,res: Response): Promise<any>{
        const servicios = await pool.query('SELECT direccion FROM Empresa WHERE id_empresa = 1');
        if(servicios.length > 0){
            return res.json(servicios[0]);
        }
        res.status(404).json({text: 'El servicio no existe'});
    }
    //DEVOLVER EL CORREO DE LA EMPRESA
    public async getCorreo (req: Request,res: Response): Promise<any>{
        const servicios = await pool.query('SELECT correo FROM Empresa WHERE id_empresa = 1');
        if(servicios.length > 0){
            return res.json(servicios[0]);
        }
        res.status(404).json({text: 'El servicio no existe'});
    }
    //DEVOLVER EL NOMRE DE LA EMPRESA
    public async getNombre (req: Request,res: Response): Promise<any>{
        const servicios = await pool.query('SELECT nombreEmpresa FROM Empresa WHERE id_empresa = 1');
        if(servicios.length > 0){
            return res.json(servicios[0]);
        }
        res.status(404).json({text: 'El servicio no existe'});
    }
    //DEVOLVER UNA FOTO
    public async getPath (req: Request,res: Response): Promise<any>{
        const {string}= req.params;
        console.log(req.params);
        const servicios = await pool.query('SELECT pathImagen FROM Foto where lower(nombreFoto) = lower(?)',[string]);
        if(servicios.length > 0){
            return res.json(servicios[0]);
        }
        res.status(404).json({text: 'La foto no existe'});
    }

}

const gamesController = new GamesController();
export default gamesController;