const FileWrite = require("../../FileWrite");

exports.create = (data, listMapping) => {
  var resources = JSON.parse(data);
  let list = formatString(resources, listMapping);

  writeToFile(list);
  // list.map(row => { console.log(row) });
}
function formatString(resources, listMapping) {
  let key;
  for (var item in resources) {
    if (typeof resources[item] === 'string') {
      key = resources[item];
      if (listMapping[resources[item]])
        resources[item] = listMapping[resources[item]];
    }
    if (typeof resources[item] === 'object') {
      formatString(resources[item], listMapping);
    }
  };
  return resources;
}

function writeToFile(list) {

  FileWrite.write('./data/target.json', JSON.stringify(list, null, 2));
}
