import {Request, Response, NextFunction} from "express";
import { EventsController } from "../controllers/eventsController";

export class EventRoutes { 
    
    public eventsController: EventsController = new EventsController() 
    
    public routes(app): void {   
        
        //todo add jwt
        app.route('/events/all')
        .get(this.eventsController.getEvents)

        app.route('/events/:email')
        .get(this.eventsController.getEventsByUser)
      
        app.route('/events/lastday')
        .get(this.eventsController.getEventsOfLastDay)

    }
}