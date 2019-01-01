import { Express } from 'express';
import { authRouter } from '../routes/auth';
import { dashRouter } from '../routes/dashboard';
import { privateRouter, publicRouter } from './auth';

export const addRoutes = (app: Express) => {
    app.use('/public', publicRouter);
    app.use('/private', privateRouter);
    publicRouter.use('/auth', authRouter);
    privateRouter.use('/dashboard', dashRouter);
};
