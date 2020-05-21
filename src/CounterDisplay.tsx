import React from 'react';
import { connect } from 'react-redux';
import { GlobalState } from './GlobalState';

interface CounterDisplayProps {
	textToShow: string;
}

const mapReduxStateToProps: (state: GlobalState) => CounterDisplayProps = (state) => {
	return {
		textToShow: `Hello ${state.userName}, you have tried to log in ${state.loginAttempts} times.`
	};
}

class CounterDisplay extends React.Component<CounterDisplayProps> {
	render() {
		return (
			<div>{this.props.textToShow}</div>
		);
	}
}

export default connect(mapReduxStateToProps)(CounterDisplay);