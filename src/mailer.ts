import nodemailer, {type Transporter} from 'nodemailer';

interface MailerConfig {
    host: string;
    port: number;
    user: string;
    pass: string;
}

export class Mailer {

    private readonly _transporter: Transporter;

    private constructor(host: string, port: number, user: string, pass: string) {
        this._transporter = nodemailer.createTransport({
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

    async send(to: string, subject: string, message: string) {
        return new Promise<void>((resolve, reject) => {
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

    static async init({host, port, user, pass}: MailerConfig) {
        return new Mailer(host, port, user, pass);
    }
}