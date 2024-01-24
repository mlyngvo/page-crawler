"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mailer = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
class Mailer {
    _transporter;
    constructor(host, port, user, pass) {
        this._transporter = nodemailer_1.default.createTransport({
            host,
            port,
            secure: true,
            requireTLS: true,
            auth: {
                user,
                pass
            }
        });
    }
    async send(to, subject, message) {
        return new Promise((resolve, reject) => {
            this._transporter.sendMail({
                to,
                subject,
                text: message
            }, (error, info) => {
                if (error !== undefined && error !== null) {
                    console.error('Send error', error);
                    reject(new Error('Failed to send message.'));
                    return;
                }
                console.info(`Successfully sent (${subject}) message to (${to}).`, info);
                resolve();
            });
        });
    }
    static async init({ host, port, user, pass }) {
        return new Mailer(host, port, user, pass);
    }
}
exports.Mailer = Mailer;
//# sourceMappingURL=mailer.js.map