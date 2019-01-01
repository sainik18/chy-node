import { Router } from 'express';
import { signUp } from './signup';

const authRouter = Router();

authRouter.post('/signup', signUp);

export {
    authRouter,
}