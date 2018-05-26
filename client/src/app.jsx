import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'; 


export default class App extends React.Component {
  constructor(props){
  	super(props)
  	  this.state = {
  	  	events: []
  	  }
  	this.search = this.search.bind(this)	
  }

  componentDidMount(e) {
  	this.setState({
  	  events: e.target.value
  	})
  }

  search(location) {
  	// functionality from Search component with information sent back.
  	axios.post('./events', { location })
  	.then(res => {
  		this.setState({
  		  events: res.data
  		})
  	})
  	.then(() => {
  	   axios.get('./events')
  	})
  }

  render(){
  	return(
  	<div>
  	   Hello 
  	  <Search onSearch={this.search}/>
  	  <Events events={this.state.events}/>
  	</div>)
  }
};

ReactDOM.render(<App/>, document.getElementById('app')); 