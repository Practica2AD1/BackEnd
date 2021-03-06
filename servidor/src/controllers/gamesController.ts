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
    //CREAR UN NUEVO SERVICIO
    public async create(req: Request,res: Response): Promise<void>{
        console.log(req.body);  
        await pool.query('INSERT INTO Servicio set ?',[req.body]);
        res.json('Servicio creado')
    }
    //DEVOLVER UN UNICO JUEGO
    public async getOne (req: Request,res: Response): Promise<any>{
        const {id}= req.params;
        const servicio = await pool.query ('SELECT * FROM Servicio WHERE id_servicio = ?',[id]);
        //console.log(servicio);
        if(servicio.length > 0){
            return res.json(servicio[0]);
        }
        res.status(404).json({text: 'El servicio no existe'});
            
    }

    public delete(req: Request,res: Response){
        res.json('eliminado un servicio')
    }

    public update(req: Request,res: Response){
        res.json('actualizando un servicio')
    }
}

const gamesController = new GamesController();
export default gamesController;