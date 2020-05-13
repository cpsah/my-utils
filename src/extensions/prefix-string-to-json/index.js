const fRead = require('./FileRead');
const cJson = require('./CreateJson');
const data = fRead.getContent('./data/source.json');
const prefix = 'T';
cJson.create(data, prefix);
