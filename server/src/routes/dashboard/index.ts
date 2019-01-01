import { Router } from 'express';
import { getOrders } from './dashboard';

const dashRouter = Router();

dashRouter.post('/orders', getOrders);

export {
    dashRouter,
};
