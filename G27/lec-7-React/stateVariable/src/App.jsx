// import React from 'react'
// import { useState } from 'react';
// const App = () => {
//   //state variable ---> react keeps track of state variable but not for a regular variable
//   let [ count, setCount] = useState(0);

//   // let count=0;
//   function increase(){
//     //count =0
//     // count=1;
//     count=count+1;
//     setCount(count)
//   }
//   return (
//     <div>
//       <h1>State variable</h1>
//       <h4>count :{count} </h4>
//       <button onClick={increase}>Click</button>
//     </div>
//   )
// }

// export default App
import React from 'react'
import { useState } from 'react';

const App = () => {
  let [random, setRandom] = useState(0);
  function generateRandom(){
    let randomNum= Math.floor(Math.random()*10)
    setRandom(randomNum);
  }
  return (
    <div>
      <h1>Random number generator</h1>
      <h4>value: {random}</h4>
      <button onClick={generateRandom}>Random</button>
    </div>
  )
}

export default App
