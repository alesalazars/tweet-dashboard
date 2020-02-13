import React, { useState } from 'react';
import ItsEven from './its-even';
import { Button } from '../App';

let saveFirstRandom

function Phrase(props){
  const [count, setCount] = useState(0);

  // const sumar = () => {setCount(count + 1)}
  // const restar = () => {setCount(count - 1)}

  const pair = () => {
    if(count % 2 == 0 && count > 0){
      props.showEvens.push(<li>Salió un número par!</li>)
    }
  }
  pair()

  return (
    <div>
      <p>El numero ahora es {count}</p>
      <ItsEven listed={props.showEvens} evensSoFar={props.showEvens.length} firstRandom={saveFirstRandom}/>
      {/* <Button text={'Suma'} operation={sumar}/>
      <Button text={'Resta'} operation={restar}/> */}
      <Button text={'Mostrar número random'} operation={() => {
        setCount(Math.floor(Math.random() * 100))
        saveFirstRandom = count
      }}/>
      <Button text={'Reiniciar'} operation={() => {setCount(0)}}/>
    </div>
  )

}

export default Phrase