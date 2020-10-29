const xlsxFile = require('read-excel-file/node');

exports.getContent = (path) => {
  return xlsxFile(path).then((rows) => {
    const result = rows.filter((item, index) => index !== 0);
    return result;
  });
}

