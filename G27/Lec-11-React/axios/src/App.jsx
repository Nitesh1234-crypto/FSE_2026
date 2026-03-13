// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import axios from 'axios'

// function App() {
//   let [users,setUsers] = useState([])

//   //logic to change state
//   // send request to server address , get data and change the state value

//   async function getUsers(){
//     //url --> https://jsonplaceholder.typicode.com/users
//     //request -->axios
//    let response=await axios.get("https://jsonplaceholder.typicode.com/users")
//    console.log(response.data); //==> [{},{},{}]
//    setUsers(response.data);
//   }
//   // getUsers();
//   useEffect(()=>{
//     getUsers();
//   },[])
//   return (
//     <div>
//       <h1>Axios</h1>
//       <h1>User list</h1>
//       <ul>
//         {/* <li>User 1</li>
//         <li>User 2</li>
//         <li>User 3</li>
//         <li>User 4</li>
//         <li>User 1</li>
//         <li>User 2</li>
//         <li>User 3</li>
//         <li>User 4</li> */}
//         {
//           users.map((user)=>{
//             return <li>{user.name}</li>
//           })
//         }
//       </ul>
//     </div>
//   )
// }

// export default App

import React, { useEffect, useRef, useState } from 'react'

function App() {
  console.log("hi")
  let [count,setCount] = useState(0)
  let idRef= useRef()
  useEffect(()=>{
      idRef.current=setInterval(()=>{
      console.log("set interval running", count)
    setCount((c)=>c+1); //callback gurantee that you will get updates current state value
  },1000)
    return ()=>{
      clearInterval(idRef.current);
    }
  },[])
  function stop(){
    clearInterval(idRef.current)
  }
  return (
    <div>
      <h1>Stop watch</h1>
      <h2>{count}</h2>
      <button onClick={stop}>Stop</button>
    </div>
  )
}

export default App
