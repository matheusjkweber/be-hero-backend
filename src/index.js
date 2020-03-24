var express = require('express');
var cors = require('cors');
const routes = require('./routes');

var app = express(); // here I use the express() method, instead of the createServer()
app.use(cors);
app.use(express.json());
app.use(routes);

var server = app.listen(3333, function() {
  console.log('Listening on port %d', server.address().port);
});

