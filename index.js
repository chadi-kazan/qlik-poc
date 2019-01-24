const crypto = require('crypto'),
      fs = require("fs"),
      http = require("http"),
      https = require('https');
const qlikauth = require('qlik-auth');

var privateKey = fs.readFileSync('../ssl/websy.pem', 'utf8');
var certificate = fs.readFileSync('../ssl/certificate.pem', 'utf8');
var credentials = {key: privateKey, cert: certificate};
const express = require('express'),
      app = express();

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get('/auth', (req, res) => {
   //Define user directory, user identity and attributes
   const profile = {
    'UserDirectory': 'GENEVA', 
    'UserId': 'chk',
    'Groups': []
  };

  const options = {
    'Certificate': '../secret/client.pfx',
    'PassPhrase': 'password'
  };

  qlikauth.init(req, res);

  console.log('Make call for ticket request');
  //Make call for ticket request
  qlikauth.requestTicket(req, res, profile, options);

  console.table(res);
});


app.use('/resources', express.static(__dirname+"/resources"))
app.use('/css', express.static(__dirname))
app.use('/js', express.static(__dirname))
app.use('/websy-viz', express.static(__dirname+"/websy-viz"))
app.use('/', express.static(__dirname));

httpsServer.listen(8443, function(){
  console.log(__dirname);
  console.log('Listening');
});
