var page = require('webpage').create();
var args = require('system').args;
page.viewportSize = { width: 800, height: 600 };
page.userAgent = '';
page.resourceTimeout = 10000;
page.onResourceTimeout = function(request) {
    console.log('Response (#' + request.id + '): ' + JSON.stringify(request));
    console.error("Request to "+args[1]+" timed out.");
};
page.open(args[1], function() {
  page.render(args[2], { format: args[3] });
  phantom.exit();
});