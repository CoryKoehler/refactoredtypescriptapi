"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const user_1 = require("../models/user");
const userService_1 = require("../services/userService");
const eventsService_1 = require("../services/eventsService");
const User = mongoose.model('User', user_1.UserSchema);
class AuthController {
    constructor() {
        this.userService = new userService_1.UserService();
        this.eventsService = new eventsService_1.EventsService();
    }
    login(req, res) {
        const type = 'Login';
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(500).json({
                message: 'Provide required fields, Email or Password missing'
            });
            return;
        }
        const user = this.userService.getUserByEmail(email);
        if (!user) {
            res.status(500).json({
                message: 'User does not exist'
            });
            return;
        }
        this.eventsService.addEvent(type, email);
        res.json({
            message: `Login ${user.email}`
        });
    }
    signup(req, res) {
        const { email, phone, password } = req.body;
        if (!email || !password) {
            res.status(500).json({
                message: 'Provide required fields, Email or Passoword missing'
            });
            return;
        }
        const user = this.userService.getUserByEmail(email);
        if (user) {
            res.status(500).json({
                message: 'User already exists'
            });
            return;
        }
        this.userService.addUser(email, phone, password);
        res.json({
            message: `Created user with email ${email}`
        });
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=authController.js.map