"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const events_1 = require("../models/events");
class EventsController {
    constructor() {
    }
    getEvents(req, res) {
        const events = events_1.Event.find({});
        res.json(events);
    }
    getEventsByUser(req, res) {
        const { email } = req.query;
        if (!email) {
            res.status(500).json({
                message: 'Provide an email to search for events of user'
            });
            return;
        }
        const events = [];
        events_1.Event.find({ user: email }).where(event => events.push({ type: event.type, created: event.created, user: event.user }));
        res.json(events);
    }
    getEventsOfLastDay(req, res) {
        const timeLastDay = moment().utc().valueOf() - 86400000;
        const events = events_1.Event.where('created').lte(timeLastDay);
        res.json(events);
    }
}
exports.EventsController = EventsController;
//# sourceMappingURL=eventsController.js.map