// import React from 'react'
// import { useState } from 'react';
// const App = () => {
//   // let count=0;
//   let [count,setCount]=useState(10)
//   function changeCount(){
//     count = count+1;
//     setCount(count)
//     console.log(count);
//   }
//   return (
//     <div>
//       <h1>State variable</h1>
//       <h4>count is {count}</h4>
//       <button onClick={changeCount}>Click</button>
//     </div>
//   )
// }

// export default App
import React from 'react'
import { useState } from 'react'
const App = () => {
  let [color,setColor] = useState("red")
  let colors=["red","green","yellow","brown","orange","purple","pink","white","cyan","blue"]
  function changeColor(){
    let randomIdx=Math.floor(Math.random()*10);
    let randomColor=colors[randomIdx];
    setColor(randomColor);

  }
  return (
    <div>
      <div style={{height:"100px", width:"100px", border:"1px solid white", background:color}}></div>
      <button onClick={changeColor}>Click</button>
    </div>
  )
}

export default App

