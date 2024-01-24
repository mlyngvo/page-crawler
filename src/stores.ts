import * as fs from 'node:fs';
import * as path from 'node:path';

export function readKey(key: string) {
    let content;
    if (fs.existsSync(key)) {
        content = fs.readFileSync(key, 'utf8');
    }
    return content;
}

export function writeKey(key: string, value: string) {
    fs.writeFileSync(key, value);
}