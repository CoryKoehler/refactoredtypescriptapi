"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;
exports.EventSchema = new Schema({
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
exports.Event = mongoose.model("Event", exports.EventSchema);
//# sourceMappingURL=events.js.map