import React, { createContext, use, useContext, useState } from 'react'
let priceContext = createContext(0);
function App() {
  return (
    <div>
      <Child1></Child1>
    </div>
  )
}
// function Child1(props){
//   let price = 500;
//   return(
//     <div>
// <h1>Child1</h1>
// <Child2 price={price}></Child2>
//     </div>
//   )
// }
// function Child2(props){
//   let price = props.price;
//   return(
//     <div>
//       <h1>Child2</h1>
//       <Child3 price={price}></Child3>
//       <Child4></Child4>
//     </div>
//   )
// }
// function Child3(props){
//   let price = props.price
//   return(
//     <div>
//       <h1>Child3</h1>
//       <Child5 price ={price}></Child5>
//     </div>
//   )
// }
// function Child4(props){
//   return(
//     <div>
//       <h1>Child4</h1>
//     </div>
//   )
// }
// function Child5(props){
//   let price = props.price;
//   return(
//     <div>
//       <h1>Child5</h1>
//       <h3>price of product is {price}</h3>
//     </div>
//   )
// }
function Child1(props){
  // let price = 500;
  console.log("1")
  let [price,setPrice] = useState(null);

  return(
    <div>
<h1>Child1</h1>
<priceContext.Provider value={price}>
    <Child2 ></Child2>
</priceContext.Provider>
<button onClick={()=>setPrice(500)}>price</button>
{/* //more component */}
    </div>
  )
}
function Child2(props){
 console.log("2")
  return(
    <div>
      <h1>Child2</h1>
      <Child3 ></Child3>
      <Child4></Child4>
    </div>
  )
}
function Child3(props){
  console.log("3")
  return(
    <div>
      <h1>Child3</h1>
      <Child5 ></Child5>
    </div>
  )
}
function Child4(props){
  console.log("4")
  return(
    <div>
      <h1>Child4</h1>
    </div>
  )
}
function Child5(props){
  console.log("5")
  let price = useContext(priceContext);
  console.log(price)
  return(
    <div>
      <h1>Child5</h1>
      {price&& <h3>price of product is {price}</h3>}
     
    </div>
  )
}

export default App
