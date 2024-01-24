"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processCongbao = void 0;
const requests_1 = require("./requests");
const xmls_1 = require("./xmls");
const stores_1 = require("./stores");
const FILE_KEY = 'mem_congbao.store';
async function processCongbao() {
    const data = await (0, requests_1.get)('https://congbao.chinhphu.vn/cac_so_cong_bao_moi_dang.rss');
    if (!(0, xmls_1.isXmlValid)(data)) {
        throw new Error('Malicious XML content.');
    }
    const { rss: { channel: { item } } } = (0, xmls_1.parseXml)(data);
    const sorted = item
        .sort((index1, index2) => index2.title.localeCompare(index1.title));
    if (sorted.length === 0) {
        console.info('No item found.');
        return;
    }
    const entry = sorted[0];
    const currentData = (0, stores_1.readKey)(FILE_KEY);
    if (entry.title === currentData) {
        console.info('No new item.');
    }
    else {
        console.info('New item detected. Sending email.');
        // console.log('item', entry);
        // const mailer = await Mailer.init({
        //     host: 'smtp.freesmtpservers.com',
        //     port: 25,
        //     user: 'tester@emailer.com',
        //     pass: ''
        // });
        // await mailer.send('congbao@crawler.com', `New Entry: ${  entry.title}`, `A entry (${entry.description}) has been added: ${  entry.link}`);
        console.info(`Update current key (${FILE_KEY}).`);
        (0, stores_1.writeKey)(FILE_KEY, entry.title);
    }
}
exports.processCongbao = processCongbao;
//# sourceMappingURL=congbao.js.map