
import express from 'express';
import { v1 } from './modules/routes/v1/index';
import { v2 } from './modules/routes/v2/index';

const app: any = express();

app.use('/api/v1', v1);
app.use('/api/v2', v2);

export {
    app
}
