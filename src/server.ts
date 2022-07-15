
import dotenv from 'dotenv';
import setTZ from 'set-tz';
dotenv.config();
setTZ('Asia/Bangkok');

import { app } from './app_startup';
import { logger } from './modules/loggers/index';

const expressApp: any = app;

expressApp.listen(process.env.PORT || 8080, () => {
    logger.info(`${process.env.NODE_ENV} server is now running....`);
});
