"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controllers/userController");
class UserRoutes {
    constructor() {
        this.userController = new userController_1.UserController();
    }
    routes(app) {
        app.route('/user')
            .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            if (req.query.key !== '78942ef2c1c98bf10fca09c808d718fa3734703e') {
                res.status(401).send('Unauthorized');
            }
            else {
                next();
            }
        }, this.userController.getUsers)
            .post(this.userController.addNewUser);
        app.route('/user/:email')
            .get(this.userController.getUserByEmail)
            .put(this.userController.updateUser)
            .delete(this.userController.deleteUser);
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=userRoutes.js.map