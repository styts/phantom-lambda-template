var AWS = require("aws-sdk");
var phantomjs = require("phantomjs-prebuilt");

exports.handler = function(event, context, callback) {
  var phantom = phantomjs.exec("phantomjs-script.js", event.url);

  var html = "";
  phantom.stdout.on("data", function(buf) {
    html += String(buf);
  });

  phantom.on("exit", code => {
    callback(null, html);
  });
};
