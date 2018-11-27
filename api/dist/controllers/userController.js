"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
class UserController {
    addNewUser(req, res) {
        let newUser = new user_1.User(req.body);
        newUser.save((err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    getUsers(req, res) {
        user_1.User.find({}, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    getUserByEmail(req, res) {
        user_1.User.findById(req.params.email, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    updateUser(req, res) {
        user_1.User.findOneAndUpdate({ _id: req.params.email }, req.body, { new: true }, (err, user) => {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    }
    deleteUser(req, res) {
        user_1.User.remove({ _id: req.params.email }, () => {
            res.json({ message: 'Successfully deleted user!' });
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map