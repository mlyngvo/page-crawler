import {XMLParser, XMLValidator} from 'fast-xml-parser';

export function isXmlValid(content: string) {
    const result = XMLValidator.validate(content);
    if (result !== true) {
        console.error('Invalid XML data content', result);
        return false;
    }
    return true;
}

export function parseXml<T>(content: string) {
    const parser = new XMLParser();
    return parser.parse(content) as T;
}