import React, { Component } from 'react';

class Button extends Component {
	shouldComponentUpdate(nextPros) {
		const { change: currentChange, locale: currentLocale } = this.props;
		const { change: nextChange, locale: nextLocale } = nextPros;
		if( currentChange === nextChange && nextLocale === currentLocale ) {
			return false;
		}  else{
			return true;
		}
		
	}
	render() {
		const { change, locale } = this.props
		return (
			<button type="button" onClick={() => change(locale)}>{this.props.children}</button>
		);
	}
}

export default Button;