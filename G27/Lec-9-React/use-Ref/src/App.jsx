import React, { useState,useRef } from 'react'

const App = () => {
  // let name="";
  console.log("re-rendering")
  // let [name,setName] = useState("");
  let inputRef=useRef();
  let [showName,setShowName] = useState("")
  // function getName(inpName){
  //   // name=inpName;
  //   setName(inpName);
  //   console.log(name);
  // }
  function changeName(){
     console.log(inputRef.current.value)
    setShowName(inputRef.current.value)

  }
  console.log(inputRef)
 
  return (
    <div>
      {/* <input onChange={(e)=>getName(e.target.value)} type="text" placeholder='Enter your name' /> */}
      <input type="text" ref={inputRef} />
      <button onClick={changeName}>Click</button>
      <h1 >name is {showName}</h1>
    </div>
  )
}

export default App
