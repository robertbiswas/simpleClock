import React, { Component } from 'react';
import Button from './Button';

class Clock extends Component {
	state = { 
		date: new Date(),
		locale: "bn-BD"
	};
	
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

	handleClick = (locale) => {
		this.setState({
			locale
		});
	}

	render() {
		const { date, locale } = this.state;
		return (
			<div>
				<h1 className="heading">
				<span className="text">{ date.toLocaleTimeString(locale) }</span>
				</h1>
				{ locale === 'bn-BD' ? (<Button change={this.handleClick} locale='en-US'>To English</Button>) : (<Button change={this.handleClick} locale='bn-BD'>To Bangla</Button>) }
			</div>
		);
	}
}

export default Clock;