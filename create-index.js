(function() {
  "use strict";

  var fs = require("fs");
  var dirs = [];
  var indexFile = "src/index.html";
  var content = "";

  var isValidDir = function validDir(dir) {
    return RegExp(/\d-.+/).test(dir);
  };

  fs.unlink(indexFile, function(err) {});
  fs.readdir("src/", function(err, items) {
    dirs = items.filter(isValidDir);
    content =
      '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><meta http-equiv="X-UA-Compatible" content="ie=edge" /><title>freeCodeCamp - Challenges</title></head><body>';
    content += dirs
      .map(function(dir) {
        return '<a href="./' + dir + '/index.html"><h1>' + dir + "</h1></a>";
      })
      .join("");
    content += "</body></html>";
    fs.writeFile(indexFile, content, function(err) {});
  });
})();
