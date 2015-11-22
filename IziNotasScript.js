var fs = require('fs');
// 3600000 = 1 hour
setInterval(deleteFile, 3600000);

function deleteFile() {

  var filePath = "../izinotas/auroraApp/cookies.json" ;
  fs.unlinkSync(filePath);
  console.log("cleaning < cookies.json >...");
  fs.createWriteStream(filePath);
}


