import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { GlobalState } from './GlobalState';

const initalState: GlobalState = {
  loginAttempts: 0,
  userName: 'Jo'
};

const counterReducer = (state: GlobalState | undefined	 = initalState, action: any) => {
  switch (action.type) {
    case 'CHANGE_USER': {
      return {
        loginAttempts: 0,
        userName: action.userName
      };
    }
    case 'INCREMENT_ATTEMPTS': {
      return {
        ...state,
        loginAttempts: state.loginAttempts + 1,
      };
    }
    default: {
      return state;
    }
  }
}

const store = createStore(counterReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
