import * as dotenv from 'dotenv';
import createAPI from './domain/config/api.config.js';
import { connectDatabase } from './domain/config/database.config.js';
import logger from './domain/config/logger.config.js';
import initSwagger from './domain/config/swagger.js';
import { inject } from './domain/config/dependencies.config.js';
import {initializeFirebaseAdmin, initializeFirebase} from './domain/config/firebase.config.js';


initSwagger().then(() => {

    inject();

    dotenv.config();

    connectDatabase();

    createAPI().listen(process.env.SERVER_PORT, () => {
        logger.info(`Server running on port ${process.env.SERVER_PORT}`);
    });

    initializeFirebaseAdmin();

    if(process.env.ENV === 'dev'){
        initializeFirebase();
    }
});