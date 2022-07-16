
import express, { Request, Response } from 'express';
import { v1 } from './modules/routes/v1/index';
import { v2 } from './modules/routes/v2/index';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('healthy');
})

app.use('/api/v1', v1);
app.use('/api/v2', v2);

export {
    app
}
