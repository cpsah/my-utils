const fs = require('fs');

exports.getContent = (path) => {
    return fs.readFileSync(path, 'utf8', (err, data) => {
        if (err) throw err;
        return data;
    });
}