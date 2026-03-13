// import React from 'react'

// function App() {
//   let age = 0;
//   function check(){
//      if(age>=18){
//          return <h1>Allowed to vote</h1>
//         }else{
//           return <h1>Not allowed to vote</h1>
//         }
//   }
//   return (
//     <div>
//       {check()}
//       {age>=18?<h1>Allowed to vote</h1>:<h1>Not Allowed</h1>}
//       {age && <h1>age is present</h1>}
//     </div>
//   )
// }

// export default App
import React from 'react'
import { useState } from 'react';
function App() {
  let [num,setNum] = useState(null);
  let [flag,setFlag] = useState(false);
  function randomNum(){
    let randomValue = Math.floor(Math.random()*10);

    setNum(randomValue)
    setFlag(true);
  }
  return (
  <div>
      <h1>7 wins</h1>
      <h2>{num}</h2>
      <button onClick={randomNum}>click</button>
      {num &&(num ==7?<div><h1>Win</h1>
     <img src="https://media.istockphoto.com/id/526835090/photo/funny-cat-in-costume-clown.jpg?s=170667a&w=is&k=20&c=PxDBcpiVvJ4z89y295c6RkBfBVlx4sJRcmo5oFmDpn8=" alt="" /></div>:
      <div><h1>Lost</h1>
      <img src="https://t4.ftcdn.net/jpg/00/52/51/21/360_F_52512193_zYP2T9C4y5hQB7ONAIQzfaPZwUvgEvN3.jpg" alt="" /> </div>)}
   </div>
    
  )
}

export default App
