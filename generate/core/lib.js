const fs = require('fs');


function writeFile(filePath, data, cb) {
  const _data = JSON.stringify(data);

  fs.writeFile(filePath, _data, err => {
    cb(err);
  }); 
}


function getUrlFromPath(path) {
  if (!fs.existsSync(path)) {
    throw new Error(`File ${path} does not exists.`)
  }

  const _url = url.pathToFileURL(path);
  return _url.href;
}


module.exports = {
  writeFile,
  getUrlFromPath
}