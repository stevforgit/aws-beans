"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.v2 = void 0;
const express_1 = __importDefault(require("express"));
const loggers_1 = require("../../loggers");
exports.v2 = express_1.default.Router();
exports.v2.get('/', (req, res) => {
    loggers_1.logger.info('v2.0 health check!');
    res.send('ok');
});
