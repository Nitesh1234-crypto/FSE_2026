import React, { useState } from 'react'

const App = () => {
  let [state,setState] = useState(0);
  let [user,setUser] = useState([{name:"Nitesh",age:24}])

  function changeState(){
    //never change previous state value directly, previous state should be immutable;
    // useState(state++); never do this
    // useState(state+1) //can do this
    let newState= state + 1; //always create new state according to you logic
    setState(newState)
  }
 
  //[{name:"Nitesh",age:24}]------>Ritik,25 [{name:"Nitesh",age:24},{name:"Ritik",age:25}]
  function addUser(name,age){
    // count++
    console.log("rendering...")
      // user.push({name:name,age:age}) 
      // setUser(user); //same refrence pe value add kr di jisse previous state change ho gya, aur rule voilate ho gya--> previous state should be immutable.
      // let newUser =[];
      // user.forEach((u)=>newUser.push(u));
      // newUser.push({name:name,age:age});
      // setUser(newUser)
      //using spread operator(...);
      //[1,2,3] ---> ...[1,2,3] ==> 1,2,3 , ...[{},{},{}]==> {},{},{}
      let newUser=[...user,{name:name,age:age}];
      setUser(newUser);
  }
  return (
    <div>
      {user.map((u)=>{
       return <UserComponent name={u.name} age={u.age}></UserComponent>
      })}
      <button onClick={()=>addUser("ritik",25)}>Add User</button>
    </div>
  )
}

function UserComponent(props){
  return(
      <div>
          <h4>name: {props.name}</h4>
          <h5>age: {props.age}</h5>
      </div>
  )
}

export default App

// btn.addEventListner("click",addUser())
