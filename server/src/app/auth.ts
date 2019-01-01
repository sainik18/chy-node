import { Router, Request, Response, NextFunction } from 'express';
import { BAD_REQUEST } from 'http-status-codes';

const publicRouter = Router();
const privateRouter = Router();

privateRouter.use(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.get('token');
    if(token === 'something') {
        return next();
    }
    res.status(BAD_REQUEST).send('check token');
});

publicRouter.use(async (req: Request, res: Response, next: NextFunction) => {
    next();
});

export {
    publicRouter,
    privateRouter,
};
