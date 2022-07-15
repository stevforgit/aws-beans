
import winston, { format } from 'winston';
const { timestamp, combine, colorize, align, printf } = format;

export const devLogger = winston.createLogger({
    format: combine(
        colorize({ all: true }),
        timestamp({
            format: 'YYYY-MM-DD hh:mm:ss.SSS A',
          }),
          align(),
          printf((log) => `[${log.timestamp}] ${log.level}: ${log.message}`)
    ),
    defaultMeta: { env: process.env.NODE_ENV },
    transports: [
        new winston.transports.Console()
    ]
});