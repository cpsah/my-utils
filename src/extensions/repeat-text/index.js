const FileWrite = require("../../../src/FileWrite");
let text = `
<Image>
    <Authtok>Basic Q29QYXRoUGx1c1VzZXI6UElDU0xpbmtNZXNzZW5nZXI=</Authtok>
    <URL>//10.10.153.11:82/@{{IMAGEID}}</URL>
    <Title>S13-7136  1 / A  HEA</Title>
</Image>`;

let result = '';

for (let index = 1; index < 46; index++) {
    result += text.replace('{{IMAGEID}}', index);
}

writeToFile(result);

function writeToFile(data) {
    FileWrite.write('./data/target.txt', data);
}
