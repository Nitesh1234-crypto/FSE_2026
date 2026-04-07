import React, { useRef } from 'react'
import { useState } from 'react';
function App() {
  console.log("re-rendering")
  let [title,setTitle] = useState("");
  // let [input ,setInput] = useState("");
  // let inpRef = useRef();
let inpValue=""
  function changeTitle(){
    // console.log(inpRef.current.value)
    setTitle(inpValue)
    // console.log(title)
  }

  // console.log(inpRef)

  
  return (
    <div >
      <input onChange={(e)=>{inpValue=e.target.value}}  type="text" placeholder='enter anything' />
      <button onClick={changeTitle}>Click</button>
      <h2 >{title}</h2>
      
    </div>
  )
}

export default App
