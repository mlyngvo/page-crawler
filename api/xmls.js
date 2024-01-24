"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseXml = exports.isXmlValid = void 0;
const fast_xml_parser_1 = require("fast-xml-parser");
function isXmlValid(content) {
    const result = fast_xml_parser_1.XMLValidator.validate(content);
    if (result !== true) {
        console.error('Invalid XML data content', result);
        return false;
    }
    return true;
}
exports.isXmlValid = isXmlValid;
function parseXml(content) {
    const parser = new fast_xml_parser_1.XMLParser();
    return parser.parse(content);
}
exports.parseXml = parseXml;
//# sourceMappingURL=xmls.js.map