import React from 'react'
import Child2 from './Child2'
import { goldContext } from '../App';
function Child1() {
    let goldInfo = "bade w ke niche sona gada hai";
  return (
    <div>
      <h1>Child1</h1>
      <goldContext.Provider value={goldInfo}>
         <Child2 ></Child2>
      </goldContext.Provider>
     
      {/* more component */}
    </div>
  )
}

export default Child1
