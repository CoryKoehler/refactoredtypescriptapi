import { Event } from '../models/events';
import * as moment from 'moment';

export class EventsService { 

    public addEvent (type: string, email: string) {   
     const currentTime = moment.utc().valueOf()
      var event = new Event( { type, email, currentTime } )
      event.save()
      
      if(event.errors) {
        throw new Error('Unable to add event: ${err}');
      }
    }
}