#!/usr/bin/env node

var download = require('download-github-repo'),
    fs = require('extfs'),
    p = process.argv,
    destination = p[2];


if(destination) {

  fs.isEmpty(destination, function(empty) {
    if(empty) {
      download('corysimmons/boy', destination, function() {
        console.log('Successfully created Boy project at '+ process.cwd() +'/'+ destination);
      });
    } else {
      console.log(process.cwd() +'/'+ destination +' is not empty. Please create your project in an empty directory.');
    }
  });

} else {

  fs.isEmpty(destination, function(empty) {
    if(empty) {
      download('corysimmons/boy', '.', function() {
        console.log('Successfully created Boy project at '+ process.cwd());
      });
    } else {
      console.log(process.cwd() +'/'+ destination +' is not empty. Please create your project in an empty directory.');
    }
  });

}
