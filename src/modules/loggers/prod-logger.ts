import winston, { format } from 'winston';
const { timestamp, combine } = format;

export const prodLogger = winston.createLogger({
    level: 'info',
    format:  combine(
        winston.format.simple(),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.json()
    ),
    defaultMeta: { env: process.env.NODE_ENV },
    transports: [
        new winston.transports.Console()
    ]
});