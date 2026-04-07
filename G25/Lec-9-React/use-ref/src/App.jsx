import React, { useState,useRef } from 'react'

const App = () => {
  console.log("re-rendering")
  // let [name,setName] = useState("");
  let inpRef=useRef();
  let user={
    name:"Nitesh"
  }
  let [showName,setShowName] = useState("")
  // function changeName(inpName){
  //   console.log(inpName)
  //   name=inpName;
  // }
  function changeShowName(){
    setShowName(inpRef.current.value)
  }
  console.log(inpRef); //---> {current:input}
  return (
    // <div>
    //   <h1>useRef</h1>
    //   <input  onChange={(e)=>changeName(e.target.value)} type="text" placeholder='Enter your name' />
    //   <button onClick={changeShowName}>Click</button>
    //   <h1>name is {showName}</h1>
    // </div>
      <div>
      <h1>useRef</h1>
      <input ref={inpRef}  type="text" placeholder='Enter your name' />
      <button onClick={changeShowName}>Click</button>
      <h1 >name is {showName}</h1>
      {/* <p>{user}</p> */}
    </div>
  )
}

export default App
