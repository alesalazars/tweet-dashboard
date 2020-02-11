import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function Phrase(){
  const [count, setCount] = useState(0);

  return (
    <p>El numero ahora es {count}</p>
    <Increment suma = {setCount(count + 1)}/>
    <Decrement resta = {setCount(count - 1)}/>
  )
}

function Increment(suma){
  return (
    <button onClick={() => {suma}}>
      Sube
    </button>
  )
}

function Decrement(resta){
  return (
    <button onClick={() => {resta}}>
      Baja
    </button>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>lalala</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Example/>
      </header>
    </div>
  );
}

export default App;
