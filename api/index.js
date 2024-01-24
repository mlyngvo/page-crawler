"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const node_cron_1 = __importDefault(require("node-cron"));
const express_1 = __importDefault(require("express"));
node_cron_1.default.schedule('* * * * * *', () => {
    console.log('running a task every second');
});
const app = (0, express_1.default)();
app.get('/api', (request, response) => {
    response.json('OK');
});
module.exports = app;
//# sourceMappingURL=index.js.map