import {get} from './requests';
import {isXmlValid, parseXml} from './xmls';
import {readKey, writeKey} from './stores';

const FILE_KEY = 'mem_congbao.store';

interface Data {
    rss: {
        channel: {
            title: string;
            pubDate: string;
            link: string;
            copyright: string;
            item: Array<{
                title: string;
                description: string;
                link: string;
            }>
        }
    }
}

export async function processCongbao() {
    const data = await get('https://congbao.chinhphu.vn/cac_so_cong_bao_moi_dang.rss');
    if (!isXmlValid(data)) {
        throw new Error('Malicious XML content.');
    }
    const {rss: { channel: {item}}} = parseXml<Data>(data);
    const sorted = item
        .sort((index1, index2) => index2.title.localeCompare(index1.title));
    if (sorted.length === 0) {
        console.info('No item found.');
        return;
    }
    const entry = sorted[0];
    const currentData = readKey(FILE_KEY);
    if (entry.title === currentData) {
        console.info('No new item.');
    } else {
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
        writeKey(FILE_KEY, entry.title);
    }
}



