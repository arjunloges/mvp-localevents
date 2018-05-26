var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher', {useMongoClient: true});


var eventsSchema = mongoose.Schema({
	city: String,
  description: String,
  url: String,
	address: String,
  // logo: String
});

var Event = mongoose.model('Event', eventsSchema);


let save = (locations, city) => { //passing in array of locations ...locations = location.events[i]
    // console.log('INSIDE DB:', city, locations[0]);
  return Promise.all(
    locations.map((location) => {
      var data = {
                 city: city,
                 description: location.name.html, 
                 url: location.vanity_url,
                 address: location.venue.address.localized_multi_line_address_display
                 // logo: location.logo.original.url
               };
        // console.log(data);
return Event.create(data, function(err){
         if(err) console.error(err)
       })
    })
  )
}

let retrieve = (location) => {
  return Event.find({city: location})
             // .sort({ date: -1 })
             .limit(10)
             .exec()
}

module.exports.save = save;
module.exports.retrieve = retrieve;
// module.exports.retrieve = get;
