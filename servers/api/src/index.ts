import express from 'express';
import { logger } from '@hello-typescript/logger/src/config/logger';
import { message } from '@hello-typescript/logger/src/helpers/message';

const app = express();

app.get('/', (req, res) => {
  message();
  res.send('Express + Typescript Server');
});

const port = 4000;
app.listen(port, () => {
  logger.info(`[server]: Server is running at https://localhost:${port}`);
});
