import * as express from 'express';
import UsersRouters from './users.routers.js';
import SocialRouters from './social.routers.js';

export default class Routes {
    public router = express.Router();

    constructor() {
        this.router.use('/users', new UsersRouters().getRouters());
        this.router.use('/social', new SocialRouters().getRouters());
    }

    public getRouters() {
        return this.router;
    }
}