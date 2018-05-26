import React from 'react';

const Events = (props) => (

   <div>
	   	<h4> Events List</h4>
		   	
		{props.events.map((event, index) => {
			return (
				<div>
					<h7>{event.description}</h7>
					<div key={index}>{event.description} </div>
					<iframe src={event.url}></iframe>
					<h4>{event.address}</h4>

				</div>
				
				)
		})}

		    		     
   </div>)

export default Events;

