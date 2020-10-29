const FileWrite = require("../../../src/FileWrite");
const FIELD_SEPARATOR = '.';

exports.create = (data) => {
  const list = formJson(data);

  writeToFile(list);

}

function formJson(data) {
  let resource = {};
  data.forEach(row => {
    resource = setKeyValue(resource, row[0].split(FIELD_SEPARATOR), row[1]);
  })
  return JSON.stringify(resource);
}

const setKeyValue = (resource, keysHierarchy, text) => {
  if (keysHierarchy.length === 1) {
    resource[keysHierarchy[0]] = text;
  } else {
    let firstKey = keysHierarchy.shift();
    resource[firstKey] = setKeyValue(typeof resource[firstKey] === 'undefined' ? {} : resource[firstKey], keysHierarchy, text);
  }
  return resource;
};

function writeToFile(list) {
  FileWrite.write('./data/sample.json', JSON.stringify(JSON.parse(list), null, 2));
}
