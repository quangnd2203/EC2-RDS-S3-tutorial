import express, { Application } from "express";
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import Routers from "src/application/routers/routes.js";
import { NetworkResponse, STATUS_CODE } from "src/domain/entities/network_response.entities.js";
import path from 'path';

import swaggerDefinition from 'swagger/combined.json' assert { type: "json" };
import accessInfoMiddleware from "src/application/middlewares/accessInfo.middlewares.js";
import responseInfoMiddleware from "src/application/middlewares/responseInfo.middlewares.js";

// Import các hàm từ module 'url' để tạo đường dẫn tương tự như __dirname
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default function createAPI(): Application {
    const api: Application = express();
    api.use(express.json());
    api.use(express.urlencoded({ extended: true }));
    api.use(cors());
    api.options('*', cors());
    api.use(accessInfoMiddleware);
    api.use(responseInfoMiddleware);
    if(process.env.ENV == 'dev')
        api.use('/uploads', express.static(path.join('/app/.uploads')));

    api.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDefinition));
    api.use('/api', new Routers().getRouters());
    api.use('/', (req, res) => {
        res.status(200).send('Welcome to API');
    });
    api.use((req, res, next) => {
        next(NetworkResponse.fromErrors(STATUS_CODE.not_found, 'not_found'));
    });
    return api;
}