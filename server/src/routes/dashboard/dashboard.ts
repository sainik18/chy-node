import { Request, Response } from 'express';

export const getOrders = (req: Request, res: Response) => {
    res.send('orders');
};
