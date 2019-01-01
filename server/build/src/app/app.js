"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const lib_1 = require("./lib");
const routes_1 = require("./routes");
const app = express_1.default();
lib_1.addLibMiddlewares(app);
routes_1.addRoutes(app);
exports.default = app;
