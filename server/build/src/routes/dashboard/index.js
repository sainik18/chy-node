"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboard_1 = require("./dashboard");
const dashRouter = express_1.Router();
exports.dashRouter = dashRouter;
dashRouter.post('/orders', dashboard_1.getOrders);
