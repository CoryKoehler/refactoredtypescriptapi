"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now,
    }
});
exports.User = mongoose.model("User", exports.UserSchema);
//# sourceMappingURL=user.js.map