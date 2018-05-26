var express = require('express');
var parser = require('body-parser');
var items = require('../database/dbIndex.js');
var request = require('request');

var app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(parser.json())

app.post('/events', function(req, res) {
  console.log(res.body);
  getEventsByLocation(res.body.location, (events) => { //check res.body properties!
  	save(events).then(() => {
  	  res.status(201).send()
  	})
  })
});

app.get('/events', function(req, res) {
   items.retrieve(req.body.location)	
})

var getEventsByLocation = function(location, callback) {
  var options = {
    url: `https://www.eventbriteapi.com/v3/events/search/?location.address=${location}&expand=organizer,venue&token=3XPZH7WU2EOLR2NGSCXU`,
    headers: {
      'User-Agent': 'request',
      Authorization: `token ${config}`,
    },
  }
  request.get(options, function (err, response, body) {
    callback(JSON.parse(body))
  })
};


app.listen(3000, function() {
  console.log('listening on port 3000!');
});
