const fRead = require('./FileRead');
const cJson = require('./CreateJson');
const data = fRead.getContent('./data/sample.txt');
cJson.create(data);
