"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
class UserService {
    getUserByEmail(email) {
        user_1.User.findById(email, (err, user) => {
            if (err) {
                throw new Error('Unable to find user: ${err}');
            }
            return user;
        });
    }
    addUser(email, phone, password) {
        var user = new user_1.User({ email, phone, password });
        user.save();
        if (user.errors) {
            throw new Error('Unable to add user: ${err}');
        }
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map