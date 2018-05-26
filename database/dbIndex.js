var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


var eventsSchema = mongoose.Schema({
	city: String,
	name: String,
	description: String,
	url: String,
	date: Number
});

var Event = mongoose.model('Event', eventsSchema);


let save = (events) => {
  return Promise.all(
    events.map((eventObj) => {
      return Repo.insert(
               {
                 city: eventObj.owner.login, //look over every property based on how the api spits it out.
                 name: eventObj.url,
                 description: eventObj.stargazers_count,
                 url: eventObj.url,
                 date: eventObj.date //UPDATE ALL OF THESE. 
               })
      			.exec()
    })
  )
}

let retrieve = (location) => {
  return Repo.find({city: location})
             .sort({ date: -1 }
             .limit(10)
             .exec()
}

module.exports.save = save;
module.exports.retrieve = retrieve;
// module.exports.retrieve = get;
