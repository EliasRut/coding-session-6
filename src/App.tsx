import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterDisplay from './CounterDisplay';
import ChangeUsernameButton from './ChangeUsernameButton';
import IncrementLoginAttemptsButton from './IncrementLoginAttemptsButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CounterDisplay />
        <ChangeUsernameButton
          buttonBackgroundColor="red"
        />
        <IncrementLoginAttemptsButton />
      </header>
    </div>
  );
}

export default App;
