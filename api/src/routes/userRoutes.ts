import {Request, Response, NextFunction} from "express";
import { UserController } from "../controllers/userController";

export class UserRoutes { 
    
    public userController: UserController = new UserController() 
    
    public routes(app): void {   

        app.route('/user')
        //todo replace with jwt
        .get((req: Request, res: Response, next: NextFunction) => {
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);            
            if(req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e'){
                res.status(401).send('Unauthorized');
            } else {
                next();
            }                        
        }, this.userController.getUsers)        

        .post(this.userController.addNewUser);
        
        app.route('/user/:email')
        .get(this.userController.getUserByEmail)
        .put(this.userController.updateUser)
        .delete(this.userController.deleteUser)

    }
}