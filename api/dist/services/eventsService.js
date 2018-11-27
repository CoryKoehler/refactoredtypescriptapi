"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("../models/events");
const moment = require("moment");
class EventsService {
    addEvent(type, email) {
        const currentTime = moment.utc().valueOf();
        var event = new events_1.Event({ type, email, currentTime });
        event.save();
        if (event.errors) {
            throw new Error('Unable to add event: ${err}');
        }
    }
}
exports.EventsService = EventsService;
//# sourceMappingURL=eventsService.js.map