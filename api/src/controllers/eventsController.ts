import { Request, Response } from 'express';
import * as moment from 'moment';

import { Event } from '../models/events';

export class EventsController {
   
    constructor() {
    }

   public getEvents(req: Request, res: Response) {
        const events = Event.find({})
        
        res.json(events)
      }
    
    public getEventsByUser (req: Request, res: Response) {
        const {email} = req.query
        
        if(!email){
          res.status(500).json({
            message: 'Provide an email to search for events of user'
          })
          return
        }
        
        const events = []
        Event.find({user: email}).where(event => events.push({type: event.type,  created: event.created, user: event.user } ))
       
        res.json(events)
      }
    
      public getEventsOfLastDay (req: Request, res: Response) {
        const timeLastDay = moment().utc().valueOf() - 86400000
        const events = Event.where('created').lte(timeLastDay);
    
        res.json(events)
      }
}