import {Request, Response} from 'express';

import pool from '../database';

class GamesController{
    
    //DEVOLVER TODOS LOS SERVICIOS
    public async list (req: Request,res: Response): Promise<any>{
        const servicios = await pool.query('SELECT * FROM Servicio');
        if(servicios.length > 0){
            return res.json(servicios);
        }
        res.status(404).json({text: 'El servicio no existe'});
    }
    //DEVOLVER UN UNICO JUEGO
    public async getOne (req: Request,res: Response): Promise<any>{
        console.log(req.body);  
        const {id}= req.params;
        const servicio = await pool.query ('SELECT * FROM Servicio WHERE id_servicio = ?',[id]);
        //console.log(servicio);
        if(servicio.length > 0){
            return res.json(servicio[0]);
        }
        res.status(404).json({text: 'El servicio no existe'});
            
    }

}

const gamesController = new GamesController();
export default gamesController;