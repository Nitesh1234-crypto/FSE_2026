// import React from 'react'
// import { useState } from 'react'
// import axios from 'axios'
// import { useEffect } from 'react'
// function App() {
//   let [users,setUsers] = useState([])
//   async function getUsers(){
//     //send request to server and get users ==>axios
//     //https://jsonplaceholder.typicode.com/users
   
//        let response=await axios.get("https://jsonplaceholder.typicode.com/users")
//       //  console.log(response.data);
//       let userData = response.data; //[{},{}......{}];
//       console.log(userData);
//       setUsers(userData)
//   }
//   // getUsers();
//   useEffect(()=>{
//     getUsers();
     
//   },[])
//   return (
//     <div>
//       <h1>Axios</h1>
//       <h2>User list</h2>
//       <ul>
//         {/* <li className="user">Name 1</li>
//         <li className="user">2</li>
//         <li className="user">3</li>
//         <li className="user">4</li> */}
//         {users.map((user)=>{
//           return  <li className="user">{user.name}</li>
//         })}
//       </ul>
//     </div>
//   )
// }

// export default App
//conditional rendering
import React from 'react'

function App() {
  let age=19;
  function check(age){
    if(age>=18){
        return <h2>Allowed to vote</h2>
      }else{
          return  <h2>Not Allowed to vote</h2>
      }
  }
  return (
    <div>
      <h1>conditional rendering</h1>
      {check(15)}
      {age>=18?<h2>Allowed to vote</h2>:<h2>Not Allowed to vote</h2>}
      {age>=18 && <h2>Allowed to vote</h2>}
    </div>
  )
}

export default App











