import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'; 
import Search from './components/search.jsx';
import Events from './components/events.jsx';



export default class App extends React.Component {
  constructor(props){
  	super(props)
  	  this.state = {
  	  	events: []
  	  }
  	this.search = this.search.bind(this);	
  }

  search(location) {
  	// functionality from Search component with information sent back.
  	axios.post('/events', { location })
  	.then((res) => {
  	  return axios.get('/events/'+location)
  	})
    .then(({data}) => {
      console.log(data);
      this.setState({
        events: data 
      })
    })
    .catch((err) => {
      console.error(err)
    })
  }


  render(){
  	return(
  	<div>
      <h1>EVENT FINDER</h1>
  	  <Search onSearch={this.search}/>
  	   <Events events={this.state.events}/>
  	</div>)
  }
};

ReactDOM.render(<App/>, document.getElementById('app'));
