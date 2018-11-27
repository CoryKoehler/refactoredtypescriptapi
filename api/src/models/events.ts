import * as mongoose from 'mongoose';
import * as moment from 'moment';

const Schema = mongoose.Schema;

export const EventSchema = new Schema({
    type: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: moment.utc().valueOf(),
    },
    user: {
        type: String,
        required: true,       
    },
});

interface IEvent {
    type: string;
    created: Date;
    user: string;
}

export interface IEventModel extends IEvent, mongoose.Document { }

export const Event = mongoose.model<IEventModel>("Event", EventSchema);