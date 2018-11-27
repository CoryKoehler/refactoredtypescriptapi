"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eventsController_1 = require("../controllers/eventsController");
class EventRoutes {
    constructor() {
        this.eventsController = new eventsController_1.EventsController();
    }
    routes(app) {
        //todo add jwt
        app.route('/events/all')
            .get(this.eventsController.getEvents);
        app.route('/events/:email')
            .get(this.eventsController.getEventsByUser);
        app.route('/events/lastday')
            .get(this.eventsController.getEventsOfLastDay);
    }
}
exports.EventRoutes = EventRoutes;
//# sourceMappingURL=eventRoutes.js.map