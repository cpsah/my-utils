const fs = require('fs');
exports.append = (path, data) => {
    //create a file named details.log:
    fs.appendFile(path, data, function (err) {
        if (err) throw err;
        console.log('Content appended successfully!');
    });
}

exports.write = (path, data) => {
    //create a file named details.log:
    fs.writeFile(path, data, function (err) {
        if (err) throw err;
        console.log('Content written successfully!');
    });
}