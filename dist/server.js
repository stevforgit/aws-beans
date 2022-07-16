"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const set_tz_1 = __importDefault(require("set-tz"));
dotenv_1.default.config();
(0, set_tz_1.default)('Asia/Bangkok');
const app_startup_1 = require("./app_startup");
const index_1 = require("./modules/loggers/index");
const expressApp = app_startup_1.app;
expressApp.listen(process.env.PORT || 8080, () => {
    index_1.logger.info(`${process.env.NODE_ENV} server is now running....`);
});
