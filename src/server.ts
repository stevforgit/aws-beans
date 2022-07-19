
import dotenv from 'dotenv';
import setTZ from 'set-tz';
dotenv.config();
setTZ('Asia/Bangkok');

import { app } from './app_startup';

import { logger } from './modules/loggers/index';

import connect_db from './modules/databases'

const uri: string = "mongodb://user:password@nodejs-nginx.cloudns.ph:27017/mern";

const expressApp: any = app;

connect_db(uri);

expressApp.listen(process.env.PORT || 8080, () => {
    logger.info(`${process.env.NODE_ENV} server is now running....`);
});
