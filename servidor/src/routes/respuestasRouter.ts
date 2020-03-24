import { Router} from 'express'; 
import respuestaController from '../controllers/respuestasController';

class RespuestaRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', respuestaController.list);
        this.router.get('/:id', respuestaController.getOne);
        this.router.post('/',respuestaController.create);
    }
}

const respuestaRoutes = new RespuestaRoutes();
export default respuestaRoutes.router;