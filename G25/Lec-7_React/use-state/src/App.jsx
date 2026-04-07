import React, { useState } from 'react'

function App() {
   // you should never mutate previous state value,
   //previous state should be immutable
   //always create a new state and put its value in place of previous state
   let [count , setCount] = useState(0);
   let [users,setUsers] = useState([{name:"Nitesh",age:24},{name:"Ritik",age:25}])
   console.log(users);
   function chnageCount(){
    // count++;
    // setCount(count++) //you can't do this
    //setCount(count+1) //you can do this
    let newCount = count+1;
    setCount(newCount);
   }
   function addUser(name,age){
    //user--[{},{}] -->name:"saurav",age:20
    let newUser={name:name,age:age};
    // users.push(newUser);
    // setUser(users); //cannot do this as it change previos array;

    // let newUsers=users; // can not do this also as it copy the same refrence
    // newUsers.push(newUser)
    // console.log(newUsers);
    // console.log(users)


    // let newUsers =[];
    // users.forEach((u)=>newUsers.push(u));
 
    // newUsers.push(newUser);
    // // console.log(newUsers);
    // // console.log(users)
    // setUsers(newUsers);

    //using spread operator ...
    //[1,2,3] == ...[1,2,3] ==>1,2,3 ;...[{},{},{}]={},{},{}
    let newUsers=[...users,newUser];
    setUsers(newUsers);
   }
  //  addUser("saurav",21)

  return (
    <div>
      <h1>Array</h1>
       {users.map((user)=>{
       return(<div>
        <h2>name :{user.name}</h2>
        <h4>age: {user.age}</h4>
        </div>
       )

      })}
      <button onClick={()=>{addUser("saurav",21)}}>Add User</button>
      {/* Array on page */}
      </div>
  
  )

}

export default App
