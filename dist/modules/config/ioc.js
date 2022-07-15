"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOKENS = exports.container = void 0;
const brandi_1 = require("brandi");
const agify_service_1 = require("../../services/agify.service");
class ApiService {
    constructor() {
        this.getUsername = () => {
            return `stephen_rodrigues`;
        };
    }
}
const TOKENS = {
    apiService: (0, brandi_1.token)('apiService'),
    agifyService: (0, brandi_1.token)('agifyService'),
};
exports.TOKENS = TOKENS;
const container = new brandi_1.Container();
exports.container = container;
container.bind(TOKENS.agifyService).toInstance(agify_service_1.AgifyService).inTransientScope();
container.bind(TOKENS.apiService).toInstance(ApiService).inTransientScope();
// const apiService = container.get(TOKENS.apiService);
// expect(apiService).toBeInstanceOf(ApiService);
