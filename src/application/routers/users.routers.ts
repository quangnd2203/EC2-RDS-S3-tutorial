import * as express from 'express';
import { container } from 'src/domain/config/dependencies.config.js';
import TYPES from 'src/domain/config/types.js';
import IUsersController from 'src/interface/controllers/users.controllers.js';

export default class UsersRouters {
    private controller: IUsersController = container.get<IUsersController>(TYPES.controller.IUsersController);

    public router = express.Router();

    public getRouters() {
        this.createRoutes();
        return this.router;
    }

    private createRoutes() {
        this.router.post('/', async (req, res) => {
            this.controller.create(req.body).then((value) => {
                res.status(value.code).send(value);
            });
        });
    }
}
