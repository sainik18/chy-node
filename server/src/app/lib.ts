import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import { Express } from 'express';

export const addLibMiddlewares =  (app: Express) => {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cors());
    app.use(compression());
};
