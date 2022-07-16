import express from 'express';
import { AgifyService } from '../../../services/agify.service';
import { container, TOKENS } from '../../config/ioc';
import { logger } from '../../loggers';

export const v1 = express.Router();


v1.get('/', async (req, res) => {
    const agifyService: AgifyService = container.get(TOKENS.agifyService);
    const result = await agifyService.get();
    logger.info('v1.0 health check!');
    res.send(result);
});

v1.get('/check', async (req, res) => {
    const agifyService: AgifyService = container.get(TOKENS.agifyService);
    const result = await agifyService.get();
    logger.info('v1.0 health check!');
    res.send(result);
});