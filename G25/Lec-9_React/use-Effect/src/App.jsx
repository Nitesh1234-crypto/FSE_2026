// import React, { useEffect, useState } from 'react'

// function App() {
//   let [count,setCount] = useState(0);
//   let [random,setRandom] = useState(0);
//   function fetchData(){
//     //code to send request to server and get data;
//     console.log("data");
//   }
//   // fetchData(); only runs on mounting phase
//   useEffect(()=>{
//     fetchData();
//   },[count])
//   return (
//     <div>
//       <h1>data</h1>
//       <h2>{count}</h2>
//       <h4>random value is {random}</h4>
//       <button onClick={()=>setCount(count+1)}>Click</button>
//       <button onClick={()=>setRandom(Math.random())}>random</button>
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from 'react'
import "./App.css"
function App() {
  
 let [count,setcount] = useState(0);
 useEffect(()=>{
  console.log("useEffect")
 let id=setInterval(()=>{
  console.log("running..")
  setcount((c)=>c+1);
 },1000)

 //cleanup function
 return function(){
      clearInterval(id);
 }

 },[])

  return (
    <div>
      <h1>Stop watch</h1>
      <h2>{count}</h2>
    </div>
  )
}

export default App
