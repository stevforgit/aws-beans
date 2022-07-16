"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.v1 = void 0;
const express_1 = __importDefault(require("express"));
const ioc_1 = require("../../config/ioc");
const loggers_1 = require("../../loggers");
exports.v1 = express_1.default.Router();
exports.v1.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const agifyService = ioc_1.container.get(ioc_1.TOKENS.agifyService);
    const result = yield agifyService.get();
    loggers_1.logger.info('v1.0 health check!');
    res.send(result);
}));
exports.v1.get('/check', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const agifyService = ioc_1.container.get(ioc_1.TOKENS.agifyService);
    const result = yield agifyService.get();
    loggers_1.logger.info('v1.0 health check!');
    res.send(result);
}));
