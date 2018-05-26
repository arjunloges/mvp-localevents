var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


var eventsSchema = new Schema({
	city: String,
	name: String,
	description: String,
	url: String,
	date: Number
})

var Event = mongoose.model('Event', eventsSchema);


Event.find(){


}

