const FileWrite = require("../../../src/FileWrite");
const FIELD_SEPARATOR = ':';

exports.create = (data) => {
    const list = formString(JSON.parse(data));

    writeToFile(list);
}

function formString(data) {
    let jsonString = '';

    const list = setKeyValue('', data, {});

    for(let row in list){
        jsonString += `"${row}","${list[row]}"\n`;
    };
    return jsonString;
}

const setKeyValue = (accumulator, data, resource) => {
    for (let key in data) {
        if (typeof data === "string") {
            resource[accumulator] = data;
        } else {
            const accu = accumulator ? `${accumulator}${FIELD_SEPARATOR}${key}` : key;
            setKeyValue(accu, data[key], resource);
        }
    }

    return resource;
};

function writeToFile(list) {
    FileWrite.write('./data/sample.csv', list);
}
