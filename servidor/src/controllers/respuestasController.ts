import {Request, Response} from 'express';

import pool from '../database';

class RespuestaController{
    
    //DEVOLVER TODOS LAS RESPUESTAS
    public async list (req: Request,res: Response): Promise<any>{
        const respuesta = await pool.query('SELECT * FROM Respuesta WHERE estado = 1');
        if(respuesta.length > 0){
            return res.json(respuesta);
        }
        res.status(404).json({text: 'La respuesta no existe'});
    }
    //CREAR UN NUEVA RESPUESTA
    public async create(req: Request,res: Response): Promise<void>{
        console.log(req.body);  
        await pool.query('INSERT INTO Respuesta set ?',[req.body]);
        res.json('Respuesta creada')
    }
    //DEVOLVER SOLO UNA RESPUESTA
    public async getOne (req: Request,res: Response): Promise<any>{
        const {id}= req.params;
        const respuesta = await pool.query ('SELECT * FROM Respuesta WHERE id_respuesta = ? and estado = 1',[id]);
        if(respuesta.length > 0){
            return res.json(respuesta[0]);
        }
        res.status(404).json({text: 'La respuesta no existe'});
            
    }

}

const respuestaController = new RespuestaController();
export default respuestaController;


/*,
    "build": "tsc -w",
    "dev": "nodemon build/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"*/