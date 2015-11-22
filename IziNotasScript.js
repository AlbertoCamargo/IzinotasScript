var fs = require('fs');
var filePath = "cookies.json" ;
fs.unlinkSync(filePath);
fs.createWriteStream(filePath);