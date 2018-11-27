import { Request, Response } from 'express';

import { User } from '../models/user';

export class UserController{

    public addNewUser (req: Request, res: Response) {                
        let newUser = new User(req.body);
    
        newUser.save((err, user) => {
            if(err){
                res.send(err);
            }    
            res.json(user);
        });
    }

    public getUsers (req: Request, res: Response) {           
        User.find({}, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public getUserByEmail (req: Request, res: Response) {           
        User.findById(req.params.email, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public updateUser (req: Request, res: Response) {           
        User.findOneAndUpdate({ _id: req.params.email }, req.body, { new: true }, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public deleteUser (req: Request, res: Response) {           
        User.remove({ _id: req.params.email }, () => {
            res.json({ message: 'Successfully deleted user!'});
        });
    }
    
}