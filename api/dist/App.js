"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const authRoutes_1 = require("./routes/authRoutes");
const eventRoutes_1 = require("./routes/eventRoutes");
const userRoutes_1 = require("./routes/userRoutes");
class App {
    constructor() {
        this.authRoutes = new authRoutes_1.AuthRoutes();
        this.eventRoutes = new eventRoutes_1.EventRoutes();
        this.userRoutes = new userRoutes_1.UserRoutes();
        this.mongoUrl = 'mongodb://localhost/db';
        this.app = express();
        this.config();
        this.authRoutes.routes(this.app);
        this.eventRoutes.routes(this.app);
        this.userRoutes.routes(this.app);
        this.mongoSetup();
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static('public'));
    }
    mongoSetup() {
        mongoose.connect(this.mongoUrl);
    }
}
exports.default = new App().app;
//# sourceMappingURL=App.js.map