import {Request, Response} from 'express';

import pool from '../database';

class GamesController{
    
    //DEVOLVER TODOS LOS SERVICIOS
    public async list (req: Request,res: Response): Promise<any>{
        const servicios = await pool.query('SELECT * FROM Servicio WHERE estado = 1');
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
        const servicio = await pool.query ('SELECT * FROM Servicio WHERE id_servicio = ? and estado = 1',[id]);
        //console.log(servicio);
        if(servicio.length > 0){
            return res.json(servicio[0]);
        }
        res.status(404).json({text: 'El servicio no existe'});
            
    }

    public async delete(req: Request,res: Response): Promise<any>{
        const {id} = req.params;
        try {
            const val  = await pool.query('UPDATE Servicio set estado = 0 WHERE id_servicio = ? and estado = 1',[id]);            
            res.json('El servicio se ha eliminado');
        } catch (error) {
            res.json(error);
        }
        
    }

    public async update(req: Request,res: Response): Promise<any>{
        const {id} = req.params;
        const val  = await pool.query('UPDATE Servicio set ? WHERE id_servicio = ? and estado = 1',[req.body,id]);
        res.json('El servicio se actualizado');
    }
}

const gamesController = new GamesController();
export default gamesController;


/*,
    "build": "tsc -w",
    "dev": "nodemon build/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"*/