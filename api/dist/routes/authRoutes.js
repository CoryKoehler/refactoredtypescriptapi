"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authController_1 = require("../controllers/authController");
class AuthRoutes {
    constructor() {
        this.authController = new authController_1.AuthController();
    }
    routes(app) {
        //figure out jwt
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'Something is working'
            });
        });
        app.route('/login')
            .post(this.authController.login);
        app.route('signup')
            .post(this.authController.signup);
    }
}
exports.AuthRoutes = AuthRoutes;
//# sourceMappingURL=authRoutes.js.map