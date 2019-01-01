"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("../routes/auth");
const dashboard_1 = require("../routes/dashboard");
const auth_2 = require("./auth");
exports.addRoutes = (app) => {
    app.use('/public', auth_2.publicRouter);
    app.use('/private', auth_2.privateRouter);
    auth_2.publicRouter.use('/auth', auth_1.authRouter);
    auth_2.privateRouter.use('/dashboard', dashboard_1.dashRouter);
};
