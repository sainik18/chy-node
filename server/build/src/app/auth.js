"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const publicRouter = express_1.Router();
exports.publicRouter = publicRouter;
const privateRouter = express_1.Router();
exports.privateRouter = privateRouter;
privateRouter.use(async (req, res, next) => {
    const token = req.get('token');
    if (token === 'something') {
        return next();
    }
    res.status(http_status_codes_1.BAD_REQUEST).send('check token');
});
publicRouter.use(async (req, res, next) => {
    next();
});
