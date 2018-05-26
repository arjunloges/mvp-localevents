var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database');
var request = require('')
var app = express();
app.use(express.static(__dirname + '/../client/dist'));



app.post('/events', function (req, res) {

});
// app.get('/events', function (req, res) {
//   \
// });

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

