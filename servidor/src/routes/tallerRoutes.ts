import { Router} from 'express'; 
import tallerController from '../controllers/tallerController'

class TallerRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/telefono', tallerController.getTelefono);
        this.router.get('/direccion', tallerController.getDireccion);
        this.router.get('/correo', tallerController.getCorreo);
        this.router.get('/nombre', tallerController.getNombre);
        this.router.get('/foto/:string', tallerController.getPath);
        
    }


}

const tallerRoutes = new TallerRoutes();
export default tallerRoutes.router;