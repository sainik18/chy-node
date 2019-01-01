import express from 'express';
import { addLibMiddlewares } from './lib';
import { addRoutes } from './routes';

const app = express();

addLibMiddlewares(app);

addRoutes(app);

export default app;
