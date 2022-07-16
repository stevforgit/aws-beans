import express from 'express';
import { logger } from '../../loggers';

export const v2 = express.Router();

v2.get('/', (req, res) => {
    logger.info('v2.0 health check!');
    res.send('ok');
});

v2.get('/check', (req, res) => {
    logger.info('v2.0 health check!');
    res.send('ok');
});