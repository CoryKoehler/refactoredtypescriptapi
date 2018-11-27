import * as bodyParser from "body-parser";
import * as express from "express";
import * as mongoose from "mongoose";

import { AuthRoutes } from "./routes/authRoutes";
import { EventRoutes } from "./routes/eventRoutes";
import { UserRoutes } from "./routes/userRoutes";

class App {

    public app: express.Application;

    public authRoutes: AuthRoutes = new AuthRoutes();
    public eventRoutes: EventRoutes = new EventRoutes();
    public userRoutes: UserRoutes = new UserRoutes();
    public mongoUrl: string = 'mongodb://localhost/db';

    constructor() {
        this.app = express();
        this.config();        
        this.authRoutes.routes(this.app);     
        this.eventRoutes.routes(this.app);     
        this.userRoutes.routes(this.app);     
        this.mongoSetup();
    }

    private config(): void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        
        this.app.use(express.static('public'));
    }

    private mongoSetup(): void{
        mongoose.connect(this.mongoUrl);        
    }
}

export default new App().app;