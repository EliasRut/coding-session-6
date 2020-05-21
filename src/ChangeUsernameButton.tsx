import React from 'react';
import { connect } from 'react-redux';
import { GlobalState } from './GlobalState';

interface StateProps {
	currentUserName: string
}

interface DispatchProps {
	onButtonClick: () => void
}

interface ChangeUsernameButtonProps extends StateProps, DispatchProps {
	buttonBackgroundColor: string
}

const mapReduxStateToProps: (state: GlobalState) => StateProps = (state) => {
	return {
		currentUserName: state.userName
	};
}

const possibleUserNames = ['Elias', 'Jo', 'Moritz', 'Sebastian'];

const mapDispatchToProps: (dispatch: any) => DispatchProps = (dispatch) => {
  return {
    onButtonClick: () => {
			const randomNameIndex = Math.floor(Math.random() * possibleUserNames.length);
			const randomUserName = possibleUserNames[randomNameIndex];
			const action = {type: 'CHANGE_USER', userName: randomUserName};
      dispatch(action);
    }
  }
}

class ChangeUsernameButton extends React.Component<ChangeUsernameButtonProps> {
	render() {
		console.log('ChangeUsernameButton was rendered.');
		return (
			<button 
				onClick={() => this.props.onButtonClick()}
				style={{backgroundColor: this.props.buttonBackgroundColor}}
			>
				Loged in as {this.props.currentUserName}. Change username
			</button>
		);
	}
}



export default connect(mapReduxStateToProps, mapDispatchToProps)(ChangeUsernameButton);