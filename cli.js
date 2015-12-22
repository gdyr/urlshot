#!/usr/bin/env node

var fs = require('fs');
var md5 = require('md5');
var program = require('commander');

/* phantomjs */
var path = require('path')
var childProcess = require('child_process')
var phantomjs = require('phantomjs')
var binPath = phantomjs.path

var phantom_args = [ path.join(__dirname, 'capture.js') ];

program
  .version('1.0.0')
  .usage('[options] url [filename]')
  .option('-F --format <format>', 'Screenshot file format (png, jpg, gif, pdf)')
  .option('-A --autohash', 'Automatically name files based on URL hash')
  .parse(process.argv);

if(!program.args[0]) {
  console.error("ERROR: URL must be provided."); process.exit(-1);
}

// Check for valid format
if(program.format) {
  var ext = program.format.toLowerCase();
  if(ext != 'png' && ext != 'jpg' && ext != 'gif' && ext != 'pdf') {
    console.error('ERROR: Only PNG, JPG, GIF and PDF extensions are supported.'); process.exit(-2);
  }
} else {
  program.format = 'png';
}

var filename = program.autohash ? md5(program.args[0])+'.'+program.format : (program.args[1] || 'screenshot.'+program.format)

phantom_args = phantom_args.concat(program.args[0], filename, program.format);

childProcess.execFile(binPath, phantom_args, function(err, stdout, stderr) {
  fs.stat(filename, function(statErr) { 
    if(statErr == null) { 
      console.log("Screenshot saved to "+filename);
    } else {
      console.error("ERROR: failed to save screenshot to "+filename);
      if(err) { console.error(err); }
    }
  }); 
})