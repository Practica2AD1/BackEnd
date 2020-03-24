import { Router} from 'express'; 
import preguntaController from '../controllers/preguntasController';

class PreguntaRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', preguntaController.list);
        this.router.get('/:id', preguntaController.getOne);
        this.router.post('/',preguntaController.create);
    }
}

const preguntaRoutes = new PreguntaRoutes();
export default preguntaRoutes.router;