import React from 'react'
import { useState } from 'react';
import Child from './Child';
const App = () => {
  // let count =0;
  let [count,setCount] = useState(0)
  function increase(){
    count = count+1;
    console.log(count)
    setCount(count);
  }
  return (
    <div>
      <h4>Counter application</h4>
      <h1>Count : {count}</h1>
      <button onClick={increase}>Increment</button>
      <Child name="Nitesh" count={count}></Child>
    </div>
  )
}

export default App
