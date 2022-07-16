"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOKENS = exports.container = void 0;
const brandi_1 = require("brandi");
const agify_service_1 = require("../../services/agify.service");
const TOKENS = {
    agifyService: (0, brandi_1.token)('agifyService'),
};
exports.TOKENS = TOKENS;
const container = new brandi_1.Container();
exports.container = container;
container.bind(TOKENS.agifyService).toInstance(agify_service_1.AgifyService).inTransientScope();
