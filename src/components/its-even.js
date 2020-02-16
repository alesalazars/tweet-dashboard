import React from 'react';

function ItsEven(prop){
  return(
    <div>
      <p>Han aparecido {prop.evensSoFar} números pares.</p>
      <ul>{prop.listed}</ul>
    </div>  
  )
}
export default ItsEven