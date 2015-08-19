var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var loginAPI = require('./features/login/loginMockAPI');

var https = require('https'),
  http = require('http'),
  fs = require('fs');

//This will ensure that we can send local requests from the app to the node server
var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Authorization, Accept, X-Requested-With, Cache-Control, Pragma, Range, Accept-Encoding, X-User-Action");
  res.header("Access-Control-Max-Age", "1728000");
  res.header("Access-Control-Expose-Headers", "Accept-Ranges, Content-Encoding, Content-Length, Content-Range");

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  } else {
    next();
  }
};

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser());
app.use(allowCrossDomain);

var port = process.env.PORT || 8000; // set our port


// Registers the routers for our mock services
app.use('/mock', loginAPI);

// https
var options = {
  key: fs.readFileSync(__dirname + '/certs/server.key'),
  cert: fs.readFileSync(__dirname + '/certs/server.crt'),
  ca: fs.readFileSync(__dirname + '/certs/ca.crt'),
  passphrase: 'gulp'
};

// Create an HTTPS service identical to the HTTP service.
https.createServer(options, app).listen(port + 443);

// START THE SERVER
//app.listen(port);
http.createServer(app).listen(port);

console.log('Mock Service started on http port: ' + port);
console.log('Mock Service started on https port: ' + (port + 443));
