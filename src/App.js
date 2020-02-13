import React from 'react';
import logo from './logo.svg';
import './App.css';
import Phrase from './components/phrase';

var listOfEvens = []

function Button(props){
  return (
    <div>
      <button onClick={props.operation}>
        {props.text}
      </button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Phrase showEvens={listOfEvens}/>
      </header>
    </div>
  );
}

export default App;
export { Button }
