const fRead = require('./FileRead');
const cJson = require('./CreateJson');
const langMap = require('./LangMap');

const listMapping = langMap.getMapping();
const data = fRead.getContent('./data/source.json');

cJson.create(data, listMapping);
