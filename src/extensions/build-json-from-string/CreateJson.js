const FileWrite = require("../../../src/FileWrite");

exports.create = (data) => {
  let list = formatString(data);

  writeToFile(list);
  // list.map(row => { console.log(row) });
}
function formatString(data) {
  let list = data.split('\n');
  const filteredList = list.filter(row => row !== '');
  const newList = filteredList.map(row => `"${formKey(row)}":"${filterValue(row)}"`);
  return newList;
}
function writeToFile(list) {
  let listing = `{ ${list.join(',')} }`;
  FileWrite.write('./data/sample.json', JSON.stringify(JSON.parse(listing), null, 2));
}

function formKey(data) {
  return data
    .replace(/[\r:\/\d.,]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
}

function filterValue(data) {
  return data.replace(/\r/g, '');
}