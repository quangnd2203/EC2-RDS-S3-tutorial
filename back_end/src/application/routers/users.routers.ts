import * as express from 'express';
import { container } from 'src/common/config/dependencies.config.js';
import TYPES from 'src/common/config/types.js';
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
        this.router.get('/', async (req, res) => {
            this.controller.getAll().then((value) => {
                res.status(value.code).send(value);
            });
        });
        this.router.patch('/:id/avatar', async (req, res) => {
            this.controller.updateAvatar(req.params.id, req).then((value) => {
                res.status(value.code).send(value);
            });
        });
    }
}
