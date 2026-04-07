import React from 'react'

function sum(a,b){
  return a+b;
}
//This is App component
function App(){
  let a=10;
  let b=5;
  let user={
    name:"Nitesh",
    address:"delhi",
    age:24
  }
  return (
    <div>
      <Header></Header>
      <h1>Hello world</h1>
      <hr />
      <br />
      <div>
        <h2>Name: {user.name} </h2>
        <h2>Address:{user.address} </h2>
        <h2>age: {user.age}</h2>
      </div>
    <h4>Random value is </h4>
      <h1>{a+b}</h1>
    </div>
  )
}

function Header(){
  return(
    <div>
      <nav>
        <ul>
          <li className="nav-items">Home</li>
          <li className="nav-items">About</li>
          <li className="nav-items">contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default App
