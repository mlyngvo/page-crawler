"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const axios_1 = __importDefault(require("axios"));
const node_https_1 = __importDefault(require("node:https"));
const node_crypto_1 = __importDefault(require("node:crypto"));
async function get(url) {
    const { status, data } = await axios_1.default.get(url, {
        httpsAgent: new node_https_1.default.Agent({
            secureOptions: node_crypto_1.default.constants.SSL_OP_LEGACY_SERVER_CONNECT,
        })
    });
    if (status !== 200) {
        throw new Error('Failed to fetch data.');
    }
    return data;
}
exports.get = get;
//# sourceMappingURL=requests.js.map