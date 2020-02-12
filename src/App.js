import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// function Phrase(){
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>El numero ahora es {count}</p>
//       <button onClick={() => {setCount(count + 1)}}>
//         Sube
//       </button>
//       <button onClick={() => {setCount(count - 1)}}>
//         Baja
//       </button>
//     </div>
//   )
// }


function Phrase(){
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>El numero ahora es {count}</p>
      <Button text={'Suma'} operation={() => {setCount(count + 1)}}/>
      <Button text={'Resta'} operation={() => {setCount(count - 1)}}/>
    </div>
  )
}

function Button(el){
  return (
    <div>
      <button onClick={el.operation}>
        {el.text}
      </button>
    </div>
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
        <Phrase/>
      </header>
    </div>
  );
}

export default App;
