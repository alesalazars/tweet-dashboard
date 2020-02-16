import React, { useState } from 'react';
import ItsEven from './its-even';
import { Button } from '../App';


function Phrase(){

  console.log('estoy renderizando')

  //variable de estado
  const [count, setCount] = useState(0);

  // const sumar = () => {setCount(count + 1)}
  // const restar = () => {setCount(count - 1)}

  const [evensList, addEven] = useState([]);

  let updateList = () => {
    console.log('entre a la funcion')
    let aux = evensList
    aux.push(<li>Salió un número par!</li>)
    addEven(aux)
  }
  
  // Counts how many times the random button is clicked
  const [clicks, randomButtonClicked] = useState(0);

  // Guarda el count como valor de showRandom, guarda el primer numero random.
  const [showRandom, setRandom] = useState();


  return (
    <div>
      <p>El numero ahora es {count}</p>
      <ItsEven
        listed={evensList}
        evensSoFar={evensList.length}
      />
      {console.log(evensList)}
      {/* <Button text={'Suma'} operation={sumar}/>
      <Button text={'Resta'} operation={restar}/> */}
      <Button 
        text={'Mostrar número random'} 
        operation={() => {
          console.log('count antes del click', count)
          let random = Math.floor(Math.random() * 100)
          setCount(random)
          console.log('count despues del click', count)
          console.log('count antes de ver si es par:', count)
          if(random % 2 === 0 && random > 0){
            updateList()
          }
          let firstClick = clicks + 1
          randomButtonClicked(firstClick)
          if(firstClick === 1){
            setRandom(random)
          }
        }
      }/>
      <p>El primer número random que apareció fue: {showRandom}</p>
      <Button text={'Reiniciar'} operation={() => {setCount(0)}}/>
    </div>
  )

}

export default Phrase