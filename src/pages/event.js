import React from 'react';

class Event extends React.Component {
	render() {
		// this.props.params has the URL parameters
		var id = this.props.params.id;

		return (
			<h1>Event {id}</h1>
		);
	}
}

module.exports = Event;