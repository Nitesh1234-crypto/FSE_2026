// import React, { useState } from 'react'
import "./App.css"
// function App() {
//   let [random,setRandom] = useState(null);
//   return (
//     <div>
//       <h1>Generate 7</h1>
//       <h2>{random}</h2>
//       <button onClick={()=>setRandom(Math.floor(Math.random()*10))}>click</button>
//       {random && (random==7? <h1>win</h1>:<h1>lost</h1>)}
//     </div>
//   )
// }

// export default App

import React, { createContext, useContext } from 'react'
import Child1 from './component/Child1'
export let dataContext = createContext();
export let goldContext= createContext();
function App() {
  let data =10;
  return (
    <div>
     
     
       <dataContext.Provider value={data}>
         <Child4></Child4>
        <Child1></Child1>
        
      </dataContext.Provider>
      
    </div>
  )
}
function Child4(){
  let value = useContext(dataContext);
  console.log(value);
  return(
    <div>
      child4
    </div>
  )
}

export default App
