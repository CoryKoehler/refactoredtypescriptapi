import * as mongoose from 'mongoose';
import { Request, Response } from 'express';

import { UserSchema } from '../models/user';
import { UserService } from '../services/userService';
import { EventsService } from '../services/eventsService';

const User = mongoose.model('User', UserSchema);

export class AuthController{
    public userService: UserService
    public eventsService: EventsService
    
    constructor() {
        this.userService = new UserService()
        this.eventsService = new EventsService()
    }

    public login(req: Request, res: Response) {
       const type = 'Login';
       const {email, password} = req.body;
        
        if(!email || !password) {
          res.status(500).json({
            message: 'Provide required fields, Email or Password missing'
          })
          return
        }
        
        const user =  this.userService.getUserByEmail(email)
        
        if(!user){
          res.status(500).json({
            message: 'User does not exist'
          })
          return
        }
    
        this.eventsService.addEvent(type, email)
        
        res.json({
          message: `Login ${user.email}`
        })
    
      }

      public signup(req: Request, res: Response) {
        const {email, phone, password} = req.body
    
        if(!email || !password){
          res.status(500).json({
            message: 'Provide required fields, Email or Passoword missing'
          })
          return
        }
        
        const user =  this.userService.getUserByEmail(email);
    
        if(user){
          res.status(500).json({
            message: 'User already exists'
          })
          return
        }
        
        this.userService.addUser(email, phone, password)
    
        res.json({
          message: `Created user with email ${email}`
        })
    
      }
  }