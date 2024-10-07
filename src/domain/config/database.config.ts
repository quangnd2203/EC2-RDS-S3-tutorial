import logger from './logger.config.js';
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: 3306,
    dialect: 'mariadb',
    logging: false,
});

export async function connectDatabase(){
    sequelize.authenticate().then(() => {
        logger.info('Connected to database');
    }).catch((e) => {
        logger.error('Error connecting to database: ', e);
    });
}

export default sequelize;