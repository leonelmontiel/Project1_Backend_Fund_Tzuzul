const path = require("path");

function view(htmlFile, res){
  return res.sendFile(path.join(__dirname, "..", "views", htmlFile));
}

module.exports = view;