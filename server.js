var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
app.use(bodyParser.json({ extended: true }));

// Get all guests
app.get('/guests', function(req, res) {

});

// Get one guest
app.get('/guests/:id', function(req, res) {

});

// Create new guest
app.post('/guests', function(req, res) {

});

// Update one guest
app.put('/guests/:id', function(req, res) {

});

// Delete one guest
app.delete('/guests/:index', function(req, res) {

});

app.listen(port, function() {
  console.log('Listening on', port);
});
