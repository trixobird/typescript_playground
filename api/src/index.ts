import express from 'express';
import { logger } from '@hello-typescript/core/src/config/logger';
import { message } from '@hello-typescript/core/src/helpers/message';

const app = express();

app.get('/', (req, res) => {
  message();
  res.send('Express + Typescript Server');
});

const port = 4000;
app.listen(port, () => {
  logger.info(`[server]: Server is running at https://localhost:${port}`);
});
