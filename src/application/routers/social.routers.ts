import { container } from "src/domain/config/dependencies.config.js";
import * as express from "express";
import TYPES from "src/domain/config/types.js";
import ISocialController from "src/interface/controllers/social.controllers.js";

export default class SocialRouters {
    private controller: ISocialController = container.get<ISocialController>(TYPES.controller.ISocialController);

    public router = express.Router();

    public getRouters() {
        this.createRoutes();
        return this.router;
    }

    private createRoutes() {
        this.router.post('/google', async (req, res) => {
            this.controller.googleAuth().then((value) => {
                res.status(value.code).send(value);
            });
        });
    }
}
