import axios from 'axios';
import https from 'node:https';
import crypto from 'node:crypto';

export async function get(url: string) {
    const {status, data} = await axios.get(url, {
        httpsAgent: new https.Agent({
            secureOptions: crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT,
        })
    });
    if (status !== 200) {
        throw new Error('Failed to fetch data.');
    }
    return data as string;
}