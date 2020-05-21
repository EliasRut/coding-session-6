import React from 'react';
import { connect } from 'react-redux';
import { GlobalState } from './GlobalState';

interface StateProps {
}

interface DispatchProps {
	onButtonClick: () => void
}

interface IncrementLoginAttemptsButtonProps extends StateProps, DispatchProps {
}

const mapReduxStateToProps: (state: GlobalState) => StateProps = (state) => {
	return {};
}

const mapDispatchToProps: (dispatch: any) => DispatchProps = (dispatch) => {
  return {
    onButtonClick: () => {
			const action = {type: 'INCREMENT_ATTEMPTS'};
      dispatch(action);
    }
  }
}

class IncrementLoginAttemptsButton extends React.Component<IncrementLoginAttemptsButtonProps> {
	render() {
		console.log('IncrementLoginAttemptsButton was rendered.');
		return (
			<button 
				onClick={() => this.props.onButtonClick()}
			>
				Increment Login attempts
			</button>
		);
	}
}



export default connect(mapReduxStateToProps, mapDispatchToProps)(IncrementLoginAttemptsButton);