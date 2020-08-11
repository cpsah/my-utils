const jsonRead = require('./ReadJson');
const createCsv = require('./CreateCsv');
start();

async function start () {
    const data = await jsonRead.getContent('./data/sample.json');
    createCsv.create(data);
}
