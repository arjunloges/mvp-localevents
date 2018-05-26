import React from 'react';

export default class Search extends React.Component {
	constructor(props){
	  super(props)	
	  this.state = {
	  	location: ''
	  }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
	}

  onChange (e){
    this.setState({
      location: e.target.value
    })
  }

  search () {
    this.props.onSearch(this.state.location);
  }

  render(){
  	return(
  	  <div>
  	    <input value={this.state.location} onChange={this.onChange}/>

  	    <button onClick={this.search}>Find Events</button>
  	  </div>)
  }
};

