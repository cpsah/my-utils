const FileWrite = require("../../FileWrite");

exports.create = (data, prefix = '') => {
  var resources = JSON.parse(data);
  let list = formatString(resources, prefix);

  writeToFile(list);
  // list.map(row => { console.log(row) });
}
function formatString(resources, prefix) {
  for (var item in resources) {
    if (typeof resources[item] === 'string') {
      resources[item] = `${prefix}${resources[item]}`;
    }
    if (typeof resources[item] === 'object') {
      formatString(resources[item], prefix);
    }
  };
  return resources;
}

function writeToFile(list) {

  FileWrite.write('./data/target.json', JSON.stringify(list, null, 2));
}
