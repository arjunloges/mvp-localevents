var express = require('express');
var parser = require('body-parser');
var items = require('../database');
var request = require('request');


var app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(parser.json());

var getEventsByLocation = function(location, callback) {
  var options = {
    url: `https://www.eventbriteapi.com/v3/events/search/?location.address=${location}&expand=organizer,venue&token=3XPZH7WU2EOLR2NGSCXU`,
    headers: {
      Authorization: `Bearer 3XPZH7WU2EOLR2NGSCXU`
    }
  }
  request.get(options, function (err, response, body) {
    callback(JSON.parse(body))
  })
};



app.post('/events', function(req, res) {
  // console.log('inside post server');
  var city = (req.body.location);
  // console.log('THIS MY CITY:', city);
  getEventsByLocation(req.body.location, (location) => { 
    // console.log('INSIDE GET EVENTS FROM API FUNC:', location.events[0].name.text);
  	items.save(location.events, city)
    .then(() => {
  	  res.status(201).send()        
  	})
  })
});




app.get('/events/:city', function (req, res) {
  // console.log('inside request body location', req.params.city);
  // console.log('inside request body', req.body);
  items.retrieve(req.params.city).then((events) => {
    res.send(events)
  })
});


app.listen(3000, function() {
  console.log('listening on port 3000!');
});
