import {Request, Response, NextFunction} from "express";
import { AuthController } from "../controllers/authController";

export class AuthRoutes { 
    
    public authController: AuthController = new AuthController() 
    
    public routes(app): void {   
        //figure out jwt
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'Something is working'
            })
        })
        
        app.route('/login')
        .post(this.authController.login);
        
        app.route('signup')
        .post(this.authController.signup)
    }
}