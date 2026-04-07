import React from 'react'


function Sum(a,b){
  return a+b;
}
//App component
const App = () => {
  let a=10;
  let b=5
  return (
    <div>
      <Header></Header>
      <h1>hello world</h1>
      <img src="" alt="" />
      <br />
      <hr />
      <h3>{a+b}</h3>
    </div>
    //but it looks like html
  )
}

//rule-1: Component name should start with capital letter
function Header(){
  return(
    <div>
        <div>
          <h2>LOGO</h2>
        </div>
        <div>
          <nav>
            <ul>
              <li className="nav-item">Home</li>
              <li className="nav-item">About</li>
              <li className="nav-item">Contact</li>
            </ul>
          </nav>
        </div>
    </div>
  )
}

export default App
