const express = require('express');
const path = require('path');
var serveStatic = require('serve-static');

const app = express();

app.use(serveStatic(__dirname + "/dist/uplata"));

// app.get('/*', function(req,res) { res.sendFile(path.join(__dirname,'/dist/uplata/index.html')); });

var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);