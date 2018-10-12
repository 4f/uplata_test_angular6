const path = require('path');
const express = require('express');
const app = express();


app.use(express.static(__dirname + '/dist/uplata'));


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/uplata/index.html'));
});


app.listen(process.env.PORT || 5000);