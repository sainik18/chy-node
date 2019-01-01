"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signup_1 = require("./signup");
const authRouter = express_1.Router();
exports.authRouter = authRouter;
authRouter.post('/signup', signup_1.signUp);
