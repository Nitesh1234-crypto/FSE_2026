
import React, { useEffect } from 'react'
import { useState } from 'react';
function App() {
  let [count,setCount] = useState(0);
  let [random,setRandom] = useState(0);
  function fetchTodo(){
    //code to fetch data
    console.log("data fetched...!")
  }
  function changeCount(){
    setCount(count+1);
  }
  function runOnCountChange(){
    //some work related to count variable
    console.log("count change function run")
  }
  function changeRandom(){
    setRandom(Math.random());
  }
  // fetchTodo();
  //mounting phase work
  useEffect(()=>{
      fetchTodo();
      let id= setInterval(()=>{
        console.log("running setInterval")
      },1000)
      

      //clean up function --> it runs only on unmounting phase
      return ()=>{
          clearInterval(id);
      }
  },[])
  useEffect(()=>{
      runOnCountChange()
  },[count]) //will run if any one of count and random change
  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={changeCount}>click</button>
      <button onClick={changeRandom}>random</button>
      <h1>count is {count}</h1>
      <h3>random value is {random}</h3>
    </div>
  )
}

export default App
