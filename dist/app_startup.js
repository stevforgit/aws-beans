"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const index_1 = require("./modules/routes/v1/index");
const index_2 = require("./modules/routes/v2/index");
const app = (0, express_1.default)();
exports.app = app;
app.use('/api/v1', index_1.v1);
app.use('/api/v2', index_2.v2);
