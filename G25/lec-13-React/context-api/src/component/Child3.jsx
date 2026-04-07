import React, { useContext } from 'react'
import { dataContext, goldContext } from '../App';
function Child3() {
    let value=useContext(dataContext);
    let value2 = useContext(goldContext);
  return (
    <div>
      <h1>Child3</h1>
      <h3>data is {value}</h3>
      <h4>sona kha hai ? : {value2}</h4>
    </div>
  )
}

export default Child3
