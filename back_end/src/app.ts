import * as dotenv from 'dotenv';
import createAPI from './common/config/api.config.js';
import { connectDatabase } from './common/config/database.config.js';
import logger from './common/config/logger.config.js';
import initSwagger from './common/config/swagger.js';
import { inject } from './common/config/dependencies.config.js';
import {initializeFirebaseAdmin} from './common/config/firebase.config.js';


initSwagger().then(() => {

    inject();

    dotenv.config();

    connectDatabase();

    createAPI().listen(process.env.SERVER_PORT, () => {
        logger.info(`Server running on port ${process.env.SERVER_PORT}`);
    });

    initializeFirebaseAdmin();
});