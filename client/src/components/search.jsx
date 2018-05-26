import React from 'react';

class Search extends React.Component {
	constructor(props){
	  super(props)	
	  this.state = {
	  	term: ''
	  }

	}

  render(){
  	return(
  	  <div>
  	    <input type='text' value={this.state.term}/>
  	    <Button/>
  	  </div>)
  }
};

export default Search; 