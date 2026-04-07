// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react'

// function App() {
//   console.log("hi")
//   let [count,setCount] = useState(0);
//   //logic to change state
//   useEffect(()=>{
//     let id=setInterval(()=>{
//   // console.log(count);
//     setCount((c)=>c+1) //gurantee previous state value
//     },1000)
//     return ()=>{
//       clearInterval(id);
//     }
//   },[])
 
  
//   return (
//     <div>
//       <h1>stop watch : {count}</h1>
//     </div>
//   )
// }

// export default App
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
function App() {
  let [color,setColor] = useState("white")
  let colors=["red","blue","orange","green","purple","yellow","pink","voilet","brown","magenta"]
  function changeColor(){
    let randomIdx = Math.floor(Math.random()*10);
    let randomColor = colors[randomIdx];
    setColor(randomColor);

  }
  useEffect(()=>{
    let id=setInterval(()=>{
      changeColor()
    },20)
    setTimeout(()=>{
      clearInterval(id)
    },2000)
    return ()=>{
      clearInterval(id);
    }
  },[])
  return (
    <div style={{background:color , width:"100vw", height:"100vh"}}>
      {/* <div style={{width:"100px", height:"100px", border:"1px solid white", background:color}}></div> */}
      <button onClick={changeColor}>Random</button>
    </div>
  )
}

export default App
