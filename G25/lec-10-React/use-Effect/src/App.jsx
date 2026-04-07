import React, { useEffect,useState } from 'react'

const App = () => {
  let [count,setCount] = useState(0);
  let [random,setRandom] = useState(0);
  function someWork(){
    console.log("work is done");
  }
  function runOnCountChange(){
    console.log("count changed")
  }
  // someWork(); //this function will run on each and every re-render, but if you want to run this function only on the first render, then you have to use useEffect;
  useEffect(()=>{
    someWork();
    let id=setInterval(()=>{
      console.log("set interval running...");
    },1000);
    // clearInterval(id);
    // componentdidUnmount(()=>clearInterval(id))

    //cleanup function
    return ()=>{
      clearInterval(id);
    }
  },[])
  useEffect(()=>{
    runOnCountChange()
  },[count])
  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={()=>setCount(count+1)}>Click</button>
      <button onClick={()=>setRandom(Math.random())}>random</button>
      <h3>random Value is {random}</h3>
      <h1>count is {count}</h1>
    </div>
  )
}

export default App
