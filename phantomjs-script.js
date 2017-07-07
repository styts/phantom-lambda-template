var system = require("system");
var page = require("webpage").create();
var url = system.args[1];

page.onError = function(msg, trace) {};

page.open(url, function() {
  console.log(page.content);
  phantom.exit();
});
