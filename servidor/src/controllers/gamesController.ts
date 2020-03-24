import {Request, Response} from 'express';

import pool from '../database';

class GamesController{
    
    public index (req: Request,res: Response){
        pool.query('DESCRIBE Empresa');
        res.json('games');
    }

    public create(req: Request,res: Response){
        res.json('creando un servicio')
    }

    public delete(req: Request,res: Response){
        res.json('eliminado un servicio')
    }
}

const gamesController = new GamesController();
export default gamesController;