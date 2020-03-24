import { Router} from 'express'; 
import tallerController from '../controllers/tallerController'

class TallerRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', tallerController.list);
    }


}

const tallerRoutes = new TallerRoutes();
export default tallerRoutes.router;