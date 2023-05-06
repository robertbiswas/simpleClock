import React, { Component } from 'react';

class Clock extends Component {
	state = { date: new Date() };
	
	componentDidMount() {
		this.clockTimer = setInterval(() => this.tick(), 1000);
	}

	tick() {
		this.setState({
			date: new Date()
		})
	}
	componentWillUnmount(){
		clearInterval(this.clockTimer);
	}

	render() {
		return (
			<div>
				<h1 className="heading">
				<span className="text">{ this.state.date.toLocaleTimeString(this.props.locale) }</span>
				</h1>
			</div>
		);
	}
}

export default Clock;