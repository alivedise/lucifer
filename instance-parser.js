// parser.js

var fs = require('fs');

function readLines(input, func) {
  var remaining = '';

  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\n');
    while (index > -1) {
      var line = remaining.substring(0, index);
      remaining = remaining.substring(index + 1);
      func(line);
      index = remaining.indexOf('\n');
    }
  });

  input.on('end', function() {
    if (remaining.length > 0) {
      func(remaining);
    }
  });
}

function func(data) {
  var data = data.replace('\r', '');
  fs.appendFileSync("./output2.txt", '<option value="' + data + '">' + data + '</option>\n');
}

var input = fs.createReadStream('instance.txt');
readLines(input, func);